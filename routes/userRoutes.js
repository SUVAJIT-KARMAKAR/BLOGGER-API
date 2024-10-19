// ROUTES > user.js routes
import { Router } from "express";
import {
    handle_user_signin,
    handle_user_signup,
    handle_new_user_signup
} from '../controllers/userController.js'

const router = Router();

// Routes 
router.get("/signin", handle_user_signin);
router.get("/signup", handle_user_signup);
router.post("/signup", handle_new_user_signup);

// Exporting 
export default router;
