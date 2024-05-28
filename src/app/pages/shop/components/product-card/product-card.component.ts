import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Product } from '../../../../core/contracts/models/product.model';
import { StarRatingComponent } from '../../../../shared/components/star-rating/star-rating.component';
import { Router } from '@angular/router';
import { ROUTE_LIST } from '../../../../core/utils/route-list';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    StarRatingComponent,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {

  private route = inject(Router);
  
  @Input({required: true}) product!: Product;

  public redirectToDetails(): void {
    this.route.navigate([ROUTE_LIST.PRODUCT + '/' + this.product.id]);
  }

  public addOneProductToCart(product: Product) {
    console.log(product);
  }
}
