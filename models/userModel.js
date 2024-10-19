// MODELS > user.js model 
import { Schema, model } from "mongoose";
import { createHmac, randomBytes } from "crypto";

const userSchema = new Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    salt : {
        type : String,
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
}, { timestamps : true } );

// Password encryption 
userSchema.pre('save', function(next) {
    const user = this;
    if ( !user.isModified("password") ) return;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");
    this.salt = salt;
    this.password = hashedPassword;
    next();
});

// Model for the Schema definition
const User = model("users", userSchema);
// Exporting 
export default User;