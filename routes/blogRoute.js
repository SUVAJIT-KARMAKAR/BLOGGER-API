// ROUTES > blogRoute.js
import { Router } from "express";
import {
    handle_adding_new_blog
} from "../controllers/blogController.js";

const router = Router();

// Routes
router.get("/addblog", handle_adding_new_blog);

// Exporting
export default router;
