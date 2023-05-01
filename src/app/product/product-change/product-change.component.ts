import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent {

  pageName = "Product Change";
  vendors!: Vendor[];
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private vendorService: VendorService
  ) { }

  saveProduct(): void {
    this.productService.change(this.product).subscribe({
      next: (response) => {
        console.debug("Product Successfully Changed!", response);
        this.router.navigateByUrl("/product/product-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.productService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Product To Change!", response);
        this.product = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.vendorService.list().subscribe({
      next: (response) => {
        console.debug("Vendors Retrieved For Dropdown", response);
        this.vendors = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
