import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent {

  pageName = "Request Line Change";
  products!: Product[];
  requestline!: Requestline;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private requestlineService: RequestlineService,
    private router: Router
  ) { }

  saveRequestline(): void {
    this.requestlineService.change(this.requestline).subscribe({
      next: (response) => {
        console.debug("Requestline Successfully Changed!", response);
        this.router.navigateByUrl(`request/request-lines/${this.requestline.requestId}`);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.requestlineService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Requestline To Change!", response);
        this.requestline = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.productService.list().subscribe({
      next: (response) => {
        console.debug("Products Retreived For Dropdown!", response);
        this.products = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
