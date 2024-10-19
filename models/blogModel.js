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
    coverimageurl : {
        type : String,
        required : false
    },
    createdby : {
        type : Schema.Types.ObjectId,
        ref : "user"
    }
}, { timestamps : true }); 

// Model creation for the given blog schema 
const Blog = model("blogs", blogSchema);
// Exporting 
export default Blog;