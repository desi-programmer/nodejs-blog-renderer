---
title : Flutter PDF blog
description : This is the entire description of the flutter PDF blog
lead: This is some lead for the blog
written : 27/05/2021
updated : 31/05/2021
style : /static/css/blogStyle/lighttheme.css
highlightTheme : https://www.desiprogrammer.com/static/highlight/styles/atom-one-light.css
highlight : https://www.desiprogrammer.com/static/highlight/highlight-dart.pack.js
url : https://desiprogrammer.com/blogs/flutter-pdf
image : https://desiprogrammer.com/static/metaImages/flutter-pdf.png
---


## Reading PDF Files From Assets 🤞

First, we need to add the following plugins to our **pubspec.yaml**{.key} file And then fetch all the plugins. The pdf\_flutter plugin will be used to read and display PDF files. The file\_picker plugin will be used to pick a file from the local storage.  
Now the path\_provider plugin and the pdf plugin well together help us in creating and saving a PDF file as path provider plugin will give us a path to save our file and the PDF plugin will help us in creating a PDF file.

```dart
  pdf_flutter: ^1.1.3
  file_picker: ^1.13.3
  
  pdf: ^1.10.1
  path_provider: ^1.6.11
```
            

Working with pdf\_flutter is very simple and here are quick examples on how you can open a file from the internet, from the assets or how you can pick a file using the file\_picker plugin and then display the file content using PDF plugin.  
I have allowed only the PDF extension in file\_picker to make sure that we don't end up getting errors

To Open a File from internet

```dart    
  PDF.network(
      // file url
     'http://africau.edu/images/default/sample.pdf',
     // optional height and width
     height: 600,
     width: MediaQuery.of(context).size.width * 0.90,
  ),
```

## Reading PDF Files {.p-2}

  First, we need to add the following plugins to our pubspec.yaml file And then fetch all the plugins. The **pdf_flutter**{.key} plugin will be used to read and display PDF files. The **file_picker**{.key} plugin will be used to pick a file from the local storage.
  Now the **path_provider**{.key} plugin and the pdf plugin well together help us in creating and saving a PDF file as path provider plugin will give us a path to save our file and the PDF plugin will help us in creating a PDF file.



```dart

  pdf_flutter: ^1.1.3
  file_picker: ^1.13.3
  
  pdf: ^1.10.1
  path_provider: ^1.6.11
        
```

  Working with pdf_flutter is very simple and here are quick examples on how you can open a file from the internet, from the assets or how you can pick a file using the file_picker plugin and then display the file content using PDF plugin.
  I have allowed only the PDF extension in file_picker to make sure that we don't end up getting errors

### To Open a File from internet

```dart

  PDF.network(
    // file url
   'http://africau.edu/images/default/sample.pdf',
   // optional height and width
   height: 600,
   width: MediaQuery.of(context).size.width * 0.90,
  )

```

### To Open a File from asset

  Using this code example , you can open a file from an asset

  ```dart
    void main() async {
      await WidgetsFlutterBindings.ensureInitialized();
      await Firebase.initializeApp();
      runApp(MyApp());
    }
  ```