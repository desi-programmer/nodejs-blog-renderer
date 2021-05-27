---
title : Flutter PDF blog
description : This is the entire description of the flutter PDF blog
lead: This is some lead for the blog
written : 27/05/2021
updated : 31/05/2021
style : /static/css/blogStyle/lighttheme.css
highlightTheme : https://www.desiprogrammer.com/static/highlight/styles/atom-one-light.css
highlight : https://www.desiprogrammer.com/static/highlight/highlight-dart.pack.js

# For seo
# remeember title description are also used in that 
url : 
image : 
---

### This is some single blog content

### Intilializing The Plugin
Now we have to initialize the plugin with some of the options. We have to start by importing the flutter_local_notifications plugin that we just installed. Then create a variable of type FlutterLocalNotificationsPlugin. I will name it as fltrNotification.

Also, make sure that you add an app-icon as a drawable resource in your android project. Add a .png icon inside **android>app>src>main>res>drawable**.

```dart
    @override
    void initState() {
    super.initState();
    var androidInitilize = new AndroidInitializationSettings('app_icon');
    var iOSinitilize = new IOSInitializationSettings();
    var initilizationsSettings =
        new InitializationSettings(androidInitilize, iOSinitilize);
    fltrNotification = new FlutterLocalNotificationsPlugin();
    fltrNotification.initialize(initilizationsSettings,
        onSelectNotification: notificationSelected);
    }
```