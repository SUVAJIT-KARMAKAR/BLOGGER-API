// Importing the requried modules in the workspace 
import express from 'express';
import path from 'path';

// Application configuration
const application = express();
const PORT = 8000;

// EJS configuration setup 
application.set('view engine', 'ejs');
application.set("views", path.resolve("./views"));

// Routes 
application.get("/homepage", (request, response) => {
    return response.render("index")
});

// Server listen 
application.listen(PORT, (error) => {
    if ( error ) {
        console.log(`SERVER CRASHED DUE TO ${error}`)
    } else {
        console.log(`SERVER IS RUNNING AT PART ${PORT}`)
    }
});