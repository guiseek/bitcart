import { Component, inject } from '@angular/core';
import { CartService } from '../services';

@Component({
  selector: 'app-cart',
  template: `
    <h2>Carrinho</h2>

    <ol>
      <li *ngFor="let item of cartService.items$ | async">
        {{ item.title }}
      </li>
    </ol>
  `,
})
export class CartComponent {
  cartService = inject(CartService);
}
