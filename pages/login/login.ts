import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimelinePage } from '../timeline/timeline'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  gotoTimelinePage(){
    this.navCtrl.push(TimelinePage);
  }
}
