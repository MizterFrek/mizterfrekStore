import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StoreApiService } from '../../core/services/api/store-api.service';
import { tap } from 'rxjs';
import { OverlayModule } from '@angular/cdk/overlay';

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
export class ShopComponent {

  private api = inject(StoreApiService);

  public loading = signal<boolean>(true);
  public openSort = false;

  products = this.api.listAllProducts().pipe(
    tap(() => this.loading.set(false))
  );

}
