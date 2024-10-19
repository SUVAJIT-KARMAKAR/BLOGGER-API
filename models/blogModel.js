// MODEL > blogModel.js 
import { Schema, model } from "mongoose";
const blogSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true,
    },
    
}); 