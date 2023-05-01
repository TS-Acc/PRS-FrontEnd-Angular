import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  pageName = "Product Detail";
  displayVerifyButton = false;
  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  removeProduct(): void {
    this.productService.remove(this.product.id).subscribe({
      next: (response) => {
        console.debug("Product Deleted!", response);
        this.router.navigateByUrl("/product/product-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  showVerifyDeleteButton(): void {
    this.displayVerifyButton = !this.displayVerifyButton;
  }

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.productService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Product Details!", response);
        this.product = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
