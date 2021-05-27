// Basic express setup 
const express = require('express');

const app = express();

// add your own routes and middlewares
// using ejs 
// so ejs middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

// Static directory is static itself 
app.use("/static", express.static(__dirname + "/static"));

// your own routes
// just adding some basic data in index route
// feel free to add your own
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Blog route
// resides in controller/blogs.js
app.use('/blogs', require('./controller/blogs')); 

// 404 route
app.use('*', (req, res) => {
    res.status(404).send("Not Found !");
})

// change PORT to whatever you want
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));