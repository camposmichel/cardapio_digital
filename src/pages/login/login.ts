import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public form: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private toastCtrl: ToastController) {
  }

  login() {
    if (this.form && this.form.email && this.form.pass) {

      this.storage.set('user', this.form);
      this.navCtrl.setRoot('TabsPage');

    } else {
      let toast = this.toastCtrl.create({
        message: 'Para acessar informe seu e-mail e senha.',
        duration: 2000
      });
      toast.present();
    }
  }

}
