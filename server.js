// Importing the requried modules in the workspace 
import express from 'express';
import path from 'path';
import user_route from "./routes/userRoutes.js";
import home_route from "./routes/homeRoute.js";

// Application configuration
const application = express();
const PORT = 8000;

// EJS configuration setup 
application.set('view engine', 'ejs');
application.set("views", path.resolve("./views"));

// Routes 
application.use("/", home_route);
application.use("/user", user_route);

// Server listen 
application.listen(PORT, (error) => {
    if ( error ) {
        console.log(`SERVER CRASHED DUE TO ${error}`)
    } else {
        console.log(`SERVER IS RUNNING AT PART ${PORT}`)
    }
});