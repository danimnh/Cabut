import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  @ViewChild("username") username;
  @ViewChild("password") password;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams) {
  }

  doLogin() {
    this.navCtrl.setRoot(MenuPage);
  }
  
  alert(message: string){
    this.alertCtrl.create({
    title:"Info!",
    subTitle: message,
    buttons: ['OK']
    })
    .present();
  };

    
  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value)
    .then( data => {
      console.log('masuk cuiii', this.fire.auth.currentUser);
      this.alert('Logged in!');
      this.navCtrl.setRoot( MenuPage );
    })
    .catch ( error => {
      console.log('error cok');
      this.alert('Gagal Logged in!');
    })

    console.log('would sign in with', this.username.value, this.password.value);
  }
}
