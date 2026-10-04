import slugify from 'slugify';
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
    propertyName: {
        type: String,
        required: [true, "please enter your property name"]
    },
    description: {
        type: String,
        required: [true, "please add information about your property"]
    },
    extraInfo: {
        type: String,
        default: "checkin on time.good services."
    },
    propertyType: {
        type: String,
        enum: ["House", "Flat", "Guest House", "Hotel"],
        default: "House"
    },
    roomType: {
        type: String,
        enum: ["Anytype", "Room", "Entire Home"],
        default: "Anytype"
    },
    maximumGuest: {
        type: Number,
        required: [true, "please give the maximum no of Guest that can occupy"]
    },
    amenities: [
        {
            name: {
                type: String,
                required: true,
                enum: [
                    "Wifi",
                    "Kitchen",
                    "Ac",
                    "Washing Machine",
                    "Tv",
                    "Pool",
                    "Free Parking"
                ]
            },
            icon: {
                type: String,
                required: true
            }
        }
    ], // <-- Removed the extra "}," that was here
    images: {
        type: [
            {
                public_id: {
                    type: String
                },
                url: {
                    type: String,
                    required: true
                }
            }
        ],
        validate: {
            validator: function (arr) {
                return arr.length >= 6;
            },
            message: "The images must contain atlest 6 images"
        }
    },
    price: {
        type: String,
        required: [true, "please enter the price per night value"],
        default: 500
    },
    address: {
        area: String,
        city: String,
        state: String,
        pincode: Number
    },
    currentBookings: [
        {
            bookingId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Booking"
            },
            fromDate: {
                type: Date
            },
            toDate: {
                type: Date
            },
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    slug: String,
    checkInTime: { type: String, default: "11:00" },
    checkOutTime: { type: String, default: "13:00" }
});

propertySchema.pre("save", function () {
    if (this.propertyName) {
        this.slug = slugify(this.propertyName, { lower: true });
    }
});

propertySchema.pre("save", function () {
    // Only format the city if it actually exists in the payload
    if (this.address && this.address.city) {
        // Wrapped in String() just in case a number is accidentally submitted
        this.address.city = String(this.address.city).toLowerCase().replaceAll(" ", "");
    }
});

const Property = mongoose.models.Property || mongoose.model("Property", propertySchema);
export { Property };