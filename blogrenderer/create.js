const reader = require("readline-sync"); 
const { addBlog } = require("./jsonhandler");

console.log("Creating a Blog....");
console.log("Just some information and you will be free from\nmanually creating stuff everywhere :)\n\n\n");

var title = reader.question("Blog Title : ")
var url = reader.question("Blog Url Slug ( Leave Empty to autogenerate ) : ")
var des = reader.question("Blog Description : ")
var file = reader.question("Blog Content File ( Leave empty to autogrnerate ) : ")

if(url.trim() == ""){
    url = title.toLowerCase().split(' ').join('-')
}
if(file.trim() == ""){
    file = "content/" + title.toLowerCase().split(' ').join('-') + '.md'
}

// adding this to local JSON file
// feel free to add more data and /or add this blog to your server's database
addBlog(title, url, des, file)