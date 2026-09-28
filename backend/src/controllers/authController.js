import {User} from "../models/userModel.js";
import jwt from "jsonwebtoken";
import crypto from "node:crypto";
import ImageKit from "../utils/ImagekitIO.js";
import { sendMail,forgotPasswordMailGenContent } from "../utils/mail.js";
import { signinToken,createSendToken,defaultAvatarUrl,filterObj } from "../utils/token.js";


// ==================== SIGN UP CONTROLLER ====================
 // ==================== SIGN UP CONTROLLER ====================
export const signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      avatar: {
        url: req.body.avatar || defaultAvatarUrl(req.body.name)
      }
    });

    // Generate JWT and send response
    createSendToken(newUser, 201, res);

  } catch (error) {
    let errorMessage = error.message;

    // Safely check for MongoDB duplicate key error code (11000)
    if (error.code === 11000 && error.keyPattern) {
      const field = Object.keys(error.keyPattern)[0];
      errorMessage = `An account with that ${field} already exists.`;
    }

    res.status(400).json({
      status: "fail",
      message: error.message
    });
  }
};

// ==================== LOGIN CONTROLLER ====================
// ==================== LOGIN CONTROLLER ====================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check if email and password exist in request body
    if (!email || !password) {
      throw new Error("Please provide email or password!");
    }

    // 2. Find user & explicitly select password (since select: false in schema)
    const user = await User.findOne({ email }).select("+password");

    // 3. Verify user presence FIRST, then check password match
    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Incorrect email or password");
    }

    // 4. Send response with JWT
    createSendToken(user, 200, res);

  } catch (error) {
    res.status(401).json({
      status: "fail",
      message: error.message
    });
  }
};

export const protect=async(req,res,next)=>{
  try{
      let token;
      if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ){
        token=req.headers.authorization.split(" ")[1]
      }else if(req.cookies.jwt && req.cookies.jwt !=="loggedout"){
        token=req.cookies.jwt;
      }

      if(!token){
        throw new Error("you are not logged in!! please login to access")
      }

      const decoded=jwt.verify(token,process.env.JWT_SECRET)

      const currentUser=await User.findById(decoded.id);
      if(!currentUser){
        throw new Error("the user belonging to the token doesn't exists")

      } ;

      if(currentUser.changedPasswordAfter(decoded.iat)){
        throw new Error("user recently changes the password,please login again")
      }

      req.user=currentUser;
      next();
  }catch(error){
    res.status(401).json({
      status:"fail",
      message:error.message
    })

  }
}