MozInstaller
============

Description
-----------
  This lib helps developers to make its apps installable on Firefox.
  It will append to body (or parent defined at constructor) different classes
  wheter the app is installed, not installed or installations error.

Usage
-----

  ```javascript
    var installer = new MozInstaller("http://myhost.com/manifest.webapp");

    $("button.install").click(function() {
      installer.install();
    });
  ```

More information on Firefox webapps:
------------------------------------

https://developer.mozilla.org/en-US/docs/Web/Apps

