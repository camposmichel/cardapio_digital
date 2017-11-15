import { UtilProvider } from './../../providers/util/util';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-invoice',
  templateUrl: 'invoice.html',
})
export class InvoicePage {
  
  public bebidas: any = [];
  public petiscos: any = [];
  public pratos: any = [];
  public sobremesas: any = [];
  public total: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private util: UtilProvider
  ) {
  }

  ionViewDidEnter() {
    this.loadData();
  }
  
  async loadData() {
    let loader = this.loadingCtrl.create({ content: 'Aguarde...' });
    loader.present();

    this.bebidas = await this.util.getStorageData('Bebida');
    this.petiscos = await this.util.getStorageData('Petisco');
    this.pratos = await this.util.getStorageData('Prato');
    this.sobremesas = await this.util.getStorageData('Sobremesa');

    this.total = this.calcTotalPrice();

    loader.dismiss();
  }

  finished() {
    let alert = this.alertCtrl.create({
      title: 'Conta Fechada',
      subTitle: 'Sua conta já foi fechada e o garçom já está à caminho.',
      buttons: ['Ok']
    });

    alert.present();
  }

  calcTotalPrice(): number {
    let sum = 0;

    for (let i in this.bebidas) {
      sum += parseFloat(this.bebidas[i].price);
    }

    for (let i in this.petiscos) {
      sum += parseFloat(this.petiscos[i].price);
    }

    for (let i in this.pratos) {
      sum += parseFloat(this.pratos[i].price);
    }

    for (let i in this.sobremesas) {
      sum += parseFloat(this.sobremesas[i].price);
    }

    return parseFloat(sum.toFixed(2));
  }

}
