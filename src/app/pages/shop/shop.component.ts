import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreApiService } from '../../core/services/api/store-api.service';
import { tap } from 'rxjs';
import { OverlayModule } from '@angular/cdk/overlay';
import { Product } from '../../core/contracts/models/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    OverlayModule
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {

  private api = inject(StoreApiService);

  public loading = signal<boolean>(true);
  public openSort = false;

  public products = signal<Product[]>([]);

  ngOnInit(): void {
    this.api.listAllProducts().pipe(
      tap(() => this.loading.set(false)),
      tap(response => this.products.update(() => response))
    ).subscribe();
  }

}
