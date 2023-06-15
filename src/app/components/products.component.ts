import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services';

@Component({
  selector: 'app-products',
  template: `
    <h2>Produtos</h2>

    <ng-container *ngIf="products$ | async as products">
      <app-product
        *ngFor="let product of products"
        [items]="cartService.items$ | async | items : product.id"
        [product]="product"
        (buy)="cartService.add($event)"
      ></app-product>
    </ng-container>
  `,
})
export class ProductsComponent {
  productService = inject(ProductService);
  products$ = this.productService.get();

  cartService = inject(CartService);
}
