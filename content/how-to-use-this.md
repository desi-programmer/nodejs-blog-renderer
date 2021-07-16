---
title : How to use this ?
description : How to use this to create your own blog.
lead: How to use this to create your own blog.
written : 27/05/2021
updated : 31/05/2021
style : /static/css/blogStyle/lighttheme.css
highlightTheme : /static/highlight/styles/atom-one-dark.css
highlightLightTheme : /static/highlight/styles/atom-one-light.css
highlight : /static/highlight/highlight-js-bash-css-html.pack.js
url : https://desiprogrammer.com/blogs/how-to-use-this
image : https://desiprogrammer.com/static/metaImages/flutter-pdf.png
---


## Getting started

1. Clone this repository.
```sh
git clone https://github.com/desi-programmer/nodejs-blog-renderer
```

2. Install all the dependencies.
```sh
cd nodejs-blog-renderer
npm start
```

3. Start the server and read this blog.
```sh
npm start 
# visit localhost:8000
```

## Customisation

The home page is almost empty and has nothing so feel free to add whatever you want.

The entire blog style rests in `static/blogStyles` so feel free to add your own light and dark theme.

I have used `highlight js` for syntax highlighting. The specific version lies in the highlight directoty.

## Adding content

By default , a list of blogs is store in blogs.json file, But feel free to add your own listing system or database.

### To add a content
```sh
npm run new
```

Fill the data needed and a blog will be added here.

## Content

The content rests in the `content` directory.

You can edit title, description , url and meta image. All the meta tags will be generated according to it.

You can edit the content as normal `MarkDown file`.