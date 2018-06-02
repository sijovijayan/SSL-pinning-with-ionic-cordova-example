# SSL-pinning-with-ionic-cordova-example
Simple Ionic3 example application which using SSL Pinning for HTTPS connection

It's little bit complex task for the new programmers to use SSL pinning with cordova-plugin-advanced-http plugin. Plugin installation and usage is not so complex, but most of the people have no idea about how to obtain the .cer file for SSL pinning purpose.

You can read my blog post to get more information about this.

http://uncaughterror.com/programming/ionic3/how-to-use-ssl-pinning-with-cordova-plugin-advanced-http/

http://uncaughterror.com/programming/ionic3/how-to-integrate-ssl-in-ionic-3-using-cordova-plugin/

How to generate .cer file ( certificate key file )
Watch this video https://www.youtube.com/watch?v=6nLK9wJPNRE

You must place your certificate file on following location for android build


 platforms\android\assets

 OR

 platforms\android\app\src\main\assets



Thanks
