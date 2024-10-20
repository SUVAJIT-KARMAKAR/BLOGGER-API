import Blog from "../models/blogModel.js";

export const get_new_blog = (request, response) => {
    return response.render("addblog", {
        user : request.user
    });
}

export const post_create_blog = async (request, response) => {
    const { title, body, username } = request.body;
    await Blog.create({
        title,
        body,
        username,
        coverimageurl :`uploads/${request.file.filename}`,
        createdby : request.user._id
    })
    return response.redirect("/homepage");
    // return response.redirect(`/blog/${blog._id}`);
}

export const check_detailed_blog = async (request,response) => {
    const found_blog = await Blog.findById(request.params.id).populate("createdBy");
    return response.render("showblog", {
        user : request.user,
        blog : found_blog
    });
}