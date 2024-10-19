// CONTROLLERS > userController.js 
import User from '../models/userModel.js';

// GET : Handling user sign in page
export const get_user_signin = (request, response) => {
    return response.render("signin");
}

// GET : Handling user sing up page
export const get_user_signup = (request, response) => {
    return response.render("signup");
}

// POST : Handling the user sign up page
export const post_user_signup = async (request, response) => {
    const { fullname, email, password } = request.body;
    await User.create({
        fullname,
        email,
        password
    });
    return response.redirect("/homepage");
}

// POST : Handling the user sign in page
export const post_user_signin = async (request,response) => {
    const { email, password } = request.body;
    const user = await User.matchPassword(email,password);
    console.log(user);
    return response.redirect("/homepage");
}