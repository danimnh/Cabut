import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { EditProfilePage } from '../pages/editprofile/editprofile'
import { MenuPage } from '../pages/menu/menu';

const firebaseAuth = {
  
  apiKey: "AIzaSyDmz6w4d9wvRmq5FsYRHih28U7hS86O2So",
  authDomain: "cabut-dmn.firebaseapp.com",
  databaseURL: "https://cabut-dmn.firebaseio.com",
  projectId: "cabut-dmn",
  storageBucket: "cabut-dmn.appspot.com",
  messagingSenderId: "856908870587"


};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    RegisterPage,
    LoginPage,
    EditProfilePage,
    MenuPage 
   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    RegisterPage,
    LoginPage,
    EditProfilePage,
    MenuPage
    
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
