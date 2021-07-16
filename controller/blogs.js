const router = require("express").Router();
const path = require("path");
const performance = require("perf_hooks").performance;
var md = require("markdown-it")();
var markdownItAttrs = require("markdown-it-attrs");
const matter = require("gray-matter");
const jsonhandler = require('../blogrenderer/jsonhandler');

md.use(markdownItAttrs, {
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: [], // empty array = all attributes are allowed
});

router.get("/", (req, res) => {
  //  generates the blog home page
  // can save a list of blogs and send whatever limit you want ex 8, 10, 12
  jsonhandler.getBlogs((err, blogs) => {
    res.render("blogs_home", { blogs: blogs });
  });
});


router.get("/:blogUrl", async (req, res, next) => {
  // for measuring performance
  // you can remove this in prod keep IDBTransaction, upto you 
  var t0 = performance.now();
  // can store a list of all blogs
  //  so as to update certain analytics
  // I am simply checking from the  List of blogs stored in blogs.json
  // the list can come from anywhere
  jsonhandler.getBlogs((err, blogs) => {
    // console.log(data);
    if (err) throw err;
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
      res.render('single_blog', { info: info, blogData: blogData });
    } else {
      // no blog is available
      // you can redirect or send a 404 page
      res.send("Not Found ");
    }
  });
});

module.exports = router;