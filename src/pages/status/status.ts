import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  public bebidas: any = [];
  public petiscos: any = [];
  public pratos: any = [];
  public sobremesas: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private util: UtilProvider
  ) {
  }

  ionViewDidEnter() {
    this.loadData();
  }

  async loadData() {
    this.bebidas = await this.util.getStorageData('Bebida');
    this.petiscos = await this.util.getStorageData('Petisco');
    this.pratos = await this.util.getStorageData('Prato');
    this.sobremesas = await this.util.getStorageData('Sobremesa');
  }
}
