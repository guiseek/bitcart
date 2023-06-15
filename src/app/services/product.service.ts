import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

export class ProductService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Product[]>('assets/products.json');
  }
}
