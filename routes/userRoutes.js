// ROUTES > user.js routes
import { Router } from "express";
import {
    get_user_signin,
    get_user_signup,
    post_user_signin,
    post_user_signup
} from '../controllers/userController.js'

const router = Router();

// Routes 
router.get("/signin", get_user_signin);
router.get("/signup", get_user_signup);

router.post("/signin", post_user_signin);
router.post("/signup", post_user_signup);


// Exporting 
export default router;
