import { Injectable } from '@angular/core';
import { Api } from '../../contracts/classes/Api';
import { Observable } from 'rxjs';
import { Produc } from '../../contracts/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService extends Api {
  
  public products():Observable<Produc[]> {
    return this.http.get<Produc[]>(this.url('products'));
  }
}
