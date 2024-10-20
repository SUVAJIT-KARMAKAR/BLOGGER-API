import Blog from "../models/blogModel.js";

export const get_new_blog = (request, response) => {
    return response.render("addblog", {
        user : request.user
    });
}

export const post_create_blog = async (request, response) => {
    const { title, body } = request.body;
    const blog = await Blog.create({
        title,
        body,
        coverimageurl :`uploads/${request.file.filename}`,
        createdby : request.user._id
    })
    return response.redirect("/homepage");
    // return response.redirect(`/blog/${blog._id}`);
}

export const check_detailed_blog = async (request,response) => {
    const detailed_blog = await Blog.findById(request.params.id);
    return response.render("showblog", {
        user : request.user,
        detailed_blog
    });
}