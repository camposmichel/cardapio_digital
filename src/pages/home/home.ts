import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { App, IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage, public appCtrl: App) {
  }

  listOptions(type: number) {
    this.navCtrl.push('ListOptionsPage', { type: type });
  }

  logout() {
    this.storage.clear()
    .then(() => {
      this.appCtrl.getRootNav().setRoot('LoginPage');
    });
  }
}
