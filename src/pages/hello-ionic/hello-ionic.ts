import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
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
    public navCtrl: NavController,
    public http: Http
    ) {
      this.testApi();
    }

  gotoRegisterPage(){
this.navCtrl.push(RegisterPage);
}
  gotoLoginPage(){
this.navCtrl.push(LoginPage);
  }
  testApi(){
    //api
    this.http.get("http://cabutapiphp.atspace.cc/db_connect.php").subscribe(data => {
      console.log(data);
    });
  }
}
