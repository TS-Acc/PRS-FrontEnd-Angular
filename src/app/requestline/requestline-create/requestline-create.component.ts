import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {

  pageName = "Request Line Create";
  pathRequestId: number = Number(this.activatedRoute.snapshot.params["id"]);
  products!: Product[];
  newRequestline: Requestline = new Requestline();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private requestlineService: RequestlineService,
    private router: Router
  ) { }

  createRequestline(): void {
    this.requestlineService.create(this.newRequestline).subscribe({
      next: (response) => {
        console.debug("Requestline Created!", response);
        this.router.navigateByUrl(`/request/request-lines/${this.pathRequestId}`);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.newRequestline.requestId = this.pathRequestId;
    this.productService.list().subscribe({
      next: (response) => {
        console.debug("Products Retreieved For Dropdown!", response);
        this.products = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
