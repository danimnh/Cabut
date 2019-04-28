import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditProfilePage } from '../editprofile/editprofile'


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    console.log('ionViewDidLoad ProfilePage');
  }
  gotoEditProfilePage(){
    this.navCtrl.push(EditProfilePage);

}
}
