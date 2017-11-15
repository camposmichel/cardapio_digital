import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-list-options',
  templateUrl: 'list-options.html',
})
export class ListOptionsPage {

  public optType: number;
  public list: any = [];
  private listCopy: any = [];
  private order: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private toastCtrl: ToastController) {
    this.optType = this.navParams.get('type');
    this.initialOptions(this.optType);
  }

  initialOptions(type: number) {
    
    let title = this.getTypeTitle(type);
    let imgUrl = this.getTypeUrl(type);

    let qtt = 10;
    let count = 0;

    while (count < qtt) {
      this.list.push({
        "id": this.getIdItem(),
        "imgUrl": imgUrl,
        "title": title + ' ' +  count,
        "subtitle": title + ' info ' + count,
        "price": this.getRandomPrice(),
        "status": 0
      });

      count++;
    }

    this.listCopy = this.list;
  }

  getTypeTitle(type: number): string {
    switch (type) {
      case 1: return 'Bebida';
      case 2: return 'Petisco';
      case 3: return 'Prato';
      case 4: return 'Sobremesa';
      default: return '';
    }
  }

  getTypeUrl(type: number): string {
    switch (type) {
      case 1: return 'assets/imgs/menu-bebidas.png';
      case 2: return 'assets/imgs/menu-petiscos.png';
      case 3: return 'assets/imgs/menu-pratos.png';
      case 4: return 'assets/imgs/menu-sobremesas.png';
      default: return '';
    }
  }

  getRandomPrice(): string {
    return (Math.floor(Math.random() * 100) + 1) + '.' + (Math.floor(Math.random() * 9) + 1) + '0';
  }

  getIdItem(): string {
    return Math.random().toString(36).substr(2);
  }

  filterItems(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.list = this.listCopy.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.list = this.listCopy;
    }

  }

  buyItem(i, item) {
    if (item.status === 0) {
      // Adiciona ao pedido;
      this.list[i].status = 1;
      this.order.push(item);

    } else {
      // Remove da lista de pedidos;
      this.list[i].status = 0;
      for (let index = 0; index < this.order.length; index++) {
        let element = this.order[index];
        if (element.id === item.id) {
          this.order.splice(index, 1);
          break;
        }
      }

    }
  }

  finished() {
    if (this.order && this.order.length) {
      this.storage.set(this.getTypeTitle(this.optType), this.order)
      .then(() => {
        let toast = this.toastCtrl.create({
          message: 'Seu pedido já foi encaminhado e chegará em breve. Fique a vontade para fazer mais pedidos.',
          duration: 4000
        });
        toast.present();
  
        this.navCtrl.pop();
      });

    } else {
      let toast = this.toastCtrl.create({
        message: 'Você não selecionou nenhum item do Cardápio.',
        duration: 4000
      });
      toast.present();
    }
  }

}
