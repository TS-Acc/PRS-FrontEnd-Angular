import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  pageName = "Product Create";
  vendors!: Vendor[];
  newProduct: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    private vendorService: VendorService
  ) { }

  createProduct(): void {
    this.productService.create(this.newProduct).subscribe({
      next: (response) => {
        console.debug("Product Successfully Created!", response);
        this.router.navigateByUrl("/product/product-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.newProduct.id = 0;
    this.vendorService.list().subscribe({
      next: (response) => {
        console.debug("Vendors Retrieved For Dropdown!", response);
        this.vendors = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
