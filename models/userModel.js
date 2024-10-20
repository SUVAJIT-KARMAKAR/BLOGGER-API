// MODELS > user.js model 
import { Schema, model } from "mongoose";
import { createHmac, randomBytes } from "crypto";
import { create_token_for_user }  from "../services/authentication.js"; 

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
        default : "/resources/userAvatar.png"
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
    // const salt = "suvajitwillmakeitoneday";
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");
    this.salt = salt;
    this.password = hashedPassword;
    next();
});

// Virtual function definition for matching password 
userSchema.static("matchPasswordAndGenerateToken", async function(email,password) {
    const user = await this.findOne({ email });
    // If the user is not found
    if ( !user ) throw new Error("USER NOT FOUND!")
    // If the user is not found
    const salt = user.salt;
    const userProvidedHash = user.password;
    const newHashedPassword = createHmac("sha256", salt).update(password).digest("hex");
    // Checking if the passwords matches for not 
    if ( newHashedPassword !== userProvidedHash ) throw new Error("PASSWORD DOES NOT MATCH!")
    const token = create_token_for_user(user);
    return token;
});

// Model for the Schema definition
const User = model("users", userSchema);
// Exporting 
export default User;