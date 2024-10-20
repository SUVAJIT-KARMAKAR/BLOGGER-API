// CONTROLLERS > homeController.js 
import Blog from "../models/blogModel.js";

export const handle_home_page = async (request,response) => {
    const allBlogs = await Blog.find({});
    return response.render("index", {
        user : request.user,
        blogs: allBlogs
    });
}
