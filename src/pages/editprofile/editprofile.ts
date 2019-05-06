import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditProfilePage {

  profile = {} as Profile;  
  username:string;
  constructor(private afDatabase: AngularFireDatabase ,private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.username = afAuth.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  createProfile(){
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.object(`profile/${auth.uid}`).set(this.profile)
        .then(() => this.navCtrl.setRoot(MenuPage)
        
        )
          })
  
    }
  doSave() {
    this.navCtrl.setRoot('MenuPage');
  }
}
