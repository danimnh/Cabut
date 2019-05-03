import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
  
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  username : string;
  password : string;
  constructor(
    public navCtrl: NavController) {}

  gotoRegisterPage(){
this.navCtrl.push(RegisterPage);
}
  gotoLoginPage(){
this.navCtrl.push(LoginPage);
  }
  
}
