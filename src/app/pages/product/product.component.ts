import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Product } from '../../core/contracts/models/product.interface';
import { StoreApiService } from '../../core/services/api/store-api.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  private api = inject(StoreApiService);

  @Input({required: true}) id!: string;

  public product = signal<undefined|Product>(undefined);

  ngOnInit(): void {
    this.api.getProduct(this.id).subscribe(product => this.product.set(product));
  }
}
