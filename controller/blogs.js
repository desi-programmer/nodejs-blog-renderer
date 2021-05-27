const router = require("express").Router();
const path = require("path");
const performance = require("perf_hooks").performance;
var md = require("markdown-it")();
var markdownItAttrs = require("markdown-it-attrs");
const matter = require("gray-matter");
const jsonhandler = require('../blogrenderer/jsonhandler');

md.use(markdownItAttrs, {
  // optional, these are default options
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: [], // empty array = all attributes are allowed
});

// var blogs = [
//     {
//       title: "Flutter PDF - Create Pdf and Read From Internet, Storage or Asset",
//       url: "flutter-pdf",
//       des: "A Code snippet about viewing PDF files in flutter that could be fetched from either the internet from internal storage or can even be compiled with the assets, also we will see how we can generate a PDF from a flutter application and then save it.",
//       file: "../content/flutter-pdf.md",
//     },
//     {
//       title: "Flutter App Ideas To Code And Excel In Flutter",
//       url: "flutter-app-idea",
//       des: "A Blog About Flutter App Ideas To Code And Excel In Flutter From the basics to becoming a pro.",
//       file: "content/flutter-app-idea.md",
//     },
//     {
//       title: "Node JS, Express Js, Google Authentication, oAuth 2.0",
//       url: "nodejs-express-google-authentication",
//       des: "Another Blog",
//       file: "content/nodejs-express-google-authentication",
//     },
//   ];

router.get("/", (req, res) => {
    //  generates the blog home page
    // can save a list of blogs and send whatever limit you want ex 8, 10, 12
    jsonhandler.getBlogs((err, blogs) => {

      res.render("blogs_home", { blogs: blogs });
    });
  });


  router.get("/:blogUrl", async (req, res, next) => {
    // for measuring performance
    var t0 = performance.now();
    // can store a list of all blogs
    //  so as to update certain analytics
    // I am simply checking from the  List of blogs stored in blogs.json
    // the list can come from anywhere
    jsonhandler.getBlogs((err, blogs) => {
      // console.log(data);
      if(err) throw err;
      let blog = blogs.find((blog) => blog.url == req.params.blogUrl);
      if (blog) {
        // a blog is available
        // we will fetch the data and render it
        const filepath = path.resolve(__dirname, blog.file);
        var result = matter.read(filepath);
        // console.log(matterres.data);
        var info = result.data;
        var blogData = md.render(result.content)
        
        var t1 = performance.now();
        console.log(
          "Rendering Blog Took : " + (t1 - t0).toPrecision(3) + " milliseconds."
          );
          res.render('single_blog', { info : info, blogData : blogData });
        } else {
          // no blog is available
          // you can redirect or send a 404 page
          res.send("Not Found ");
        }
      });
  });

module.exports = router;