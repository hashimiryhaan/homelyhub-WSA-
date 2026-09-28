//user Schema 

import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import crypto from "node:crypto"
import { type } from "node:os";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true,"PLease enter your name"],
            trim: true,
            maxLength:[50, "your name cannot be longer than 50 characters"]
        },
        email:{
            type : String,
            required: [true,"please enter email ID"],
            unique: true,
            lowercase : true,
            trim: true,
            validate: [validator.isEmail,"please enter valid email address"]
        },
        password:{
            type: String,
            required: [true,"please enter password"],
            minlength: [6,"your password must be longer than 6 characters"],
            select:false

        },
        passwordConfirm :{
            type: String,
            required: [true,"please confirm your password"],
            validate:{
                validator:function(el){
                    return el=== this.password
                },
                message: "passwords are not the same!"
            }
        },
        phoneNumber:{
            type:String,
            required: true,
            unique:true,
            trim:true,
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user"
        },
        avatar:{
            url:{type:String},
            public_id:{type:String}
        },
        passwordChangedAt:{
            type:Date
        },
        passwordResetToken:{
            type:String,
            select:false,
            index:true
        },
        passwordResetExpires:{
            type:String,
            select:false,
        },

    },
    {timestamps:true}
)

userSchema.set("toJSON",{
    transform:function(doc,ret){
        delete ret.password;
        delete ret.passwordConfirm;
        delete ret.passwordResetToken;
        delete ret.passwordResetExpires;
        delete ret._v;
        return ret;
    }
})


userSchema.pre("save",async function(){
    if(!this.isModified("password")) return;

    this.password=await bcrypt.hash(this.password,12);
    this.passwordConfirm = undefined;
    
});


userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};


userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};


userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  // Hash token before storing in DB
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Token expires in 10 minutes
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken; // Return raw token to send via email
};

// Create User model (MongoDB will create plural collection name: "users")
const User = mongoose.model("User", userSchema);

export {User};

