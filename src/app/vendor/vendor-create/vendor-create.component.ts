import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {

  pageName = "Vendor Create"
  newVendor: Vendor = new Vendor();

  constructor(
    private router: Router,
    private vendorService: VendorService
  ) { }

  createVendor(): void {
    this.vendorService.create(this.newVendor).subscribe({
      next: (response) => {
        console.debug("Vendor Successfully Created!", response);
        this.router.navigateByUrl("/vendor/vendor-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.newVendor.id = 0;
  }

}
