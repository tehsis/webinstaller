WebInstaller
============

[Installing Mozilla webapps](http://https://developer.mozilla.org/en-US/docs/Web/API/Apps.install/ "Install") even easier.

Description
-----------
This lib helps developers to make its apps installable on Firefox.
It will append to body (or parent defined at constructor) different classes
wheter the app is installed, not installed or installations error.

Installing
-----
You can use bower to install the script

```
$bower install webinstaller --save
```

And thenembed the script using a script tag or requirejs.

```html
<script src="libs/webinstaller/webinstaller.min.js" />
```
or

```html
<script src="libs/webinstaller/webinstaller.js" />
```
or

```javascript
define(['webinstaller'], function(WebInstaller) {
  // ..
});
```

Usage
-----

```javascript
var installer = new WebInstaller("http://myhost.com/manifest.webapp");

$("button.install").click(function() {
  installer.install();
});
```

When the plugin has been initiliazed (via calling the constructor) it will add classes to the body according the webapp status so you can style your app:

```css
    .installed button.install, button.install {
        display: none;
    }

    .not-installed button.install {
        display: block;
    }

    .error-message {
        display: none;
    }

    .install-error .error-message {
        display: block;
    }
```

The default classes are:

- installed: When the app is already installed.
- not-installed: When the app is not installed.
- install-error: When something goes wrong.
- not-installabe: When the browser doesn't support webapps


More information on Firefox webapps:
------------------------------------

https://developer.mozilla.org/en-US/docs/Web/Apps

TODO
----

* Read the manifest file and add [the propper tags to have a "webapp" on iOS](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
