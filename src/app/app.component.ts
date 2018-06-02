import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private http: HTTP) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    this.http.enableSSLPinning(true);
    // enable SSL pinning

    this.http.get('https://reqres.in/api/users/2', {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      console.log('pinning success');
      var responseData = JSON.parse(data.data);
      console.log('responseData',responseData);

      alert( responseData.data.first_name );

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
      alert('SSL Pinning failed OR http req error');


    });

  }
}

