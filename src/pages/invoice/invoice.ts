import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  
  public bebidas: any = [];
  public petiscos: any = [];
  public pratos: any = [];
  public sobremesas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public loadingCtrl: LoadingController ) {
    this.loadData();
  }
  
  async loadData(): Promise<void> {
    let loader = this.loadingCtrl.create({ content: 'Aguarde...' });
    loader.present();

    this.bebidas = await this.storage.get('1');
    this.petiscos = await this.storage.get('2');
    this.pratos = await this.storage.get('3');
    this.sobremesas = await this.storage.get('4');

    loader.dismiss();
  }

  finished() {
    console.log(JSON.stringify(this.bebidas));
    console.log(JSON.stringify(this.petiscos));
    console.log(JSON.stringify(this.pratos));
    console.log(JSON.stringify(this.sobremesas));
  }

}
