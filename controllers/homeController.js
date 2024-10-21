// CONTROLLERS > homeController.js 
import Blog from "../models/blogModel.js";

export const handle_home_page = async (request,response) => {
    const allBlogs = await Blog.find({});
    return response.render("index", {
        user : request.user,
        blogs: allBlogs
    });
};

// Search route
export const handle_blog_search = async (request, response) => {
    const searchQuery = request.query.query;  // Get the search term from the query string

    try {
        // Search for blogs where the title or body contains the search query (case insensitive)
        const blogs = await Blog.find({
            $or: [
                { title: { $regex: searchQuery, $options: 'i' } },
                { body: { $regex: searchQuery, $options: 'i' } }
            ]
        });

        response.render('index', {
            blogs,
            user : request.user
        });  // Render the home page with the search results
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


