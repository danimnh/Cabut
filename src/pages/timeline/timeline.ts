import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TimelinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }
  doRefresh(event) {
    this.navCtrl.push(TimelinePage)
    //console.log('Begin async operation');
    //biar ga error dulu jd gw push ke timelinepage, harusnya connect ke database

    //setTimeout(() => {
      //console.log('Async operation has ended');
      //event.target.complete();
    //}, 2000);
  }

}
