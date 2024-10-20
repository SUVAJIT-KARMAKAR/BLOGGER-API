import Blog from "../models/blogModel.js";

export const get_new_blog = (request, response) => {
    return response.render("addblog", {
        user : request.user
    });
}

export const post_create_blog = (request, response) => {
    console.log(request.body);
    return response.redirect("/homepage");
}