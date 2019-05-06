import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { TimelinePage } from '../timeline/timeline';
import { Observable } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})



export class ProfilePage {
username:string;

profileData: Observable<any>


  constructor( private afDatabase: AngularFireDatabase ,private afAuth:AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams) {
    this.username = afAuth.auth.currentUser.email;
    this.afAuth.authState.take(1).subscribe(data => {
      this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges();
    })

  }

  ionViewWillLoad(){
   
  }

  
}
