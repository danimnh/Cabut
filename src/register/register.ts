import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { EditProfilePage } from '../editprofile/editprofile';
import { LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild("username") username;
@ViewChild("password") password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,  public loading: LoadingController) {
  }

  alert(message: string){
    this.alertCtrl.create({
    title:"Info!",
    subTitle: message,
    buttons: ['OK']
    })
    .present();
  };

  
  Register(){
    if(this.username.value==""){
      let alert = this.alertCtrl.create({
        title:"WADIDAW",
        subTitle:"Kolom Username belum terisi",
        buttons: ['OK']
      });

      alert.present();
    }
      else if(this.password.value==""){
      let alert = this.alertCtrl.create({
        title:"Haduh kamu tuh ya",
        subTitle:"passwordnya isi",
        buttons: ['OK']
      });

      alert.present();
    }

      else{
         this.fire.auth.createUserWithEmailAndPassword(this.username.value, this.password.value)
         .then(data =>{
            console.log('got data', data);
            this.alert('Registered');
            this.navCtrl.setRoot(EditProfilePage);
         })

         .catch(error => {
            console.log('error cui', error);
            this.alert(error.message);

         })
         console.log('would register user with ', this.username.value, this.password.value);
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  gotoEditProfilePage(){
    this.navCtrl.push(EditProfilePage);

  }
}
