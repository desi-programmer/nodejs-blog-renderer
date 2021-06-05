// handles a blogs.json file stored in content/blogs.json

const fs = require("fs");
var filePath = "content/blogs.json";

// Structure of JSON file
// blogs = [
//     {
//         'title' : "Blog title",
//         'url' : 'Url slug of the blog',
//         'description' : "description of the Blog",
//         'file' : "path of file the content is stored"
//     }
// ]

module.exports.getBlogs = function (cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      console.error("No Blogs List found\nCheck if there is a blogs.json File in your contents directory");
      return cb && cb(err);
    }
    try {
      const obj = JSON.parse(fileData);
      return cb && cb(null, obj);
    } catch (err) {
      return cb && cb(err);
    }
  });
};

module.exports.addBlog = async function (title, url, description, file) {
  var data = {
    title,
    url,
    description,
    file,
  };
  // console.log(data);
  try {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        console.error("Unexpected Error !");
      }
      if (fileData) {
        var blogsData = JSON.parse(fileData);
        blogsData.push(data);
        fs.writeFile(filePath, JSON.stringify(blogsData, null, 4), (err) => {
          if (err) console.log(err);
          console.log(
            "Blog Created Successfully\nCheck your contents Folder for your File\n\nHappy Editing and Blog Writting :)"
          );
        });
      }
    });
  } catch (error) {
    console.log("No Earlier content/blogs.json file found...");
    // create a new file and Write data
    data = JSON.stringify([data], null, 4);
    fs.writeFile(filePath, data, (err) => {
      if (err) console.log(err);
      console.log(
        "Blog Created Successfully\nCheck your contents Folder for your File\n\nHappy Editing and Blog Writting :)"
      );
    });
  }
};
