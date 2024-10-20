// ROUTES > blogRoute.js
import { Router } from "express";
import multer from "multer";
import path from 'path';
import {
    get_new_blog,
    post_create_blog
} from "../controllers/blogController.js";

const router = Router();

// Creating a photo storage zone for the uploaded cover images
const storage = multer.diskStorage({
    destination : function ( request, file, cb ) {
        cb ( null, path.resolve(`./public/uploads`));
    },
    filename : function ( request, file, cb ) {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
});
// Creating an upload instance 
const upload = multer({ storage : storage });

// Routes
router.get("/addblog", get_new_blog);
router.post("/addblog", upload.single('coverimage'), post_create_blog);

// Exporting
export default router;
