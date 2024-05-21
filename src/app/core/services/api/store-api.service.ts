import { Injectable } from '@angular/core';
import { Api } from '../../contracts/classes/Api';
import { Observable } from 'rxjs';
import { Product } from '../../contracts/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService extends Api {
  
  public listAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url('products'));
  }

  public getProduct(product: string): Observable<Product> {
    return this.http.get<Product>(this.url(`products/${product}`));
  }
}
