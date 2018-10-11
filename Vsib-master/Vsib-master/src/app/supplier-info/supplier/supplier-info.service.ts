import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class SupplierInfoService {
  // private url = `${environment.api}/data/supplier_18.json`;
  private url = '../../assets/data/'; // supplier_18.json';

  constructor(private _httpClient: HttpClient) {
  }

  getSupplierDetails(id) {
    return this._httpClient.get(this.url + 'supplier_' + id + '.json');
  }
}
