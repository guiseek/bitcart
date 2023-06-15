import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductService, CartService } from './services';
import { ItemsPipe } from './pipes/items.pipe';
import { AppComponent } from './app.component';
import {
  ToolbarComponent,
  ProductsComponent,
  ProductComponent,
  CartComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductComponent,
    CartComponent,
    ProductsComponent,
    ItemsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          component: ProductsComponent,
        },
        {
          path: 'cart',
          component: CartComponent,
        },
      ],
      {
        initialNavigation: 'enabledNonBlocking',
      }
    ),
  ],
  providers: [
    {
      provide: HttpClient,
    },
    {
      provide: ProductService,
      deps: [HttpClient],
    },
    {
      provide: CartService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
