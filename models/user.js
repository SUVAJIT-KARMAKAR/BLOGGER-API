// MODELS > user.js model 
import { Schema, model } from "mongoose";
const userSchema = new Schema({
    fullname : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    salt : {
        type : String,
        requried : true
    },
    password : {
        type : String,
        required : true,
    },
    userprofileimage : {
        type : String,
        default : "../public/images/userAvatar.png"
    },
    role : {
        type : String,
        enum : ["USER", "ADMIN"],
        default : "USER"
    }
}, { timestamps : true });

// Model for the Schema definition
const User = model("users", userSchema);
export default User;