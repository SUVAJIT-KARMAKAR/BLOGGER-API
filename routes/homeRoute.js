// ROUTES > homeRoute.js routes
import { Router } from "express";
import { handle_home_page }  from '../controllers/homeController.js'

const router = Router();

// Routes 
router.get("/homepage", handle_home_page);

// Exporting 
export default router;