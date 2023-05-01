import { Component } from '@angular/core';

import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from '../../core/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  pageName = "Product List";
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.productService.list().subscribe({
      next: (response) => {
        console.debug("Product List Retrieved!", response);
        this.products = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
