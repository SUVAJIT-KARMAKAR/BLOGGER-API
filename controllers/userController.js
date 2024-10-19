// CONTROLLERS > userController.js 
import User from '../models/userModel.js';

// GET : Handling user sign in page
export const handle_user_signin = (request, response) => {
    return response.render("signin");
}

// GET : Handling user sing up page
export const handle_user_signup = (request, response) => {
    return response.render("signup");
}

// POST : Handling the user sign up page
export const handle_new_user_signup = async (request, response) => {
    const { fullname, email, password } = request.body;
    await User.create({
        fullname,
        email,
        password
    });
    return response.redirect("/");
}