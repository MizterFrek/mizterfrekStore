import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreApiService } from '../../core/services/api/store-api.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {

  private api = inject(StoreApiService);

  public loading = signal<boolean>(true);

  products = this.api.products().pipe(
    tap(() => this.loading.set(false))
  );

}
