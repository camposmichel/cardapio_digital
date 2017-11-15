// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class UtilProvider {

  constructor(private storage: Storage) {
  }

  getStorageData(key: string): Promise<any> {

    if (key) {
      return this.storage.get(key);
    }

    return;
  }

}
