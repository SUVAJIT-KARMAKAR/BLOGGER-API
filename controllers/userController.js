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

// GET : Handling logout for the logged in user
export const handle_logout = (request, response) => {
    return response.clearCookie("token").redirect("/homepage")
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
    try {
        const token = await User.matchPasswordAndGenerateToken(email,password);
        return response.cookie("token", token).redirect("/homepage");
    } catch (error) {
        return response.render("signin", {
            error : "INCORRECT EMAIL OR PASSWORD !"
        })
    }
}