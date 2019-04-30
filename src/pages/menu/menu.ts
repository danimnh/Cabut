import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title : string;
  pageName : string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'TimelinePage', index : 0 , icon: 'home' },
     {title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'ProfilePage', index : 1 , icon: 'contacts' },

    
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
openpage(page: PageInterface) {

}
  isActive(page: PageInterface){

  }
}
