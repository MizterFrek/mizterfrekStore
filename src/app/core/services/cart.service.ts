import { Injectable, signal } from '@angular/core';
import { CartItem } from '../contracts/models/cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor() { }

  private _cart = signal<CartItem[]>([]);

  get cart() {
    return this._cart();
  }

  public addProductInCart(item: CartItem): void {
    this._cart.update(cart => [...cart, item]);
  }

}
