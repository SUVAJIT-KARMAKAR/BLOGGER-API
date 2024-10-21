// ROUTES > homeRoute.js routes
import { Router } from "express";
import {
    handle_home_page,
    handle_blog_search
}  from '../controllers/homeController.js'

const router = Router();

// Routes 
router.get("/homepage", handle_home_page);
router.get("/search", handle_blog_search);
// Exporting 
export default router;