import Blog from "../models/blogModel.js";

export const handle_adding_new_blog = (request, response) => {
    return response.render("addblog", {
        user : request.user
    });
}