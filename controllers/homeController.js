// CONTROLLERS > homeController.js 

export const handle_home_page = (request,response) => {
    return response.render("index", {
        user : request.user
    });
}
