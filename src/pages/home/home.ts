import { ListOptionsPage } from './../list-options/list-options';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  listOptions(type: number) {
    this.navCtrl.push(ListOptionsPage, { type: type });
  }

}
