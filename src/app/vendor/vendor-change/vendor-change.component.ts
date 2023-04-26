import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent {

  pageName = "Vendor Change"
  vendor!: Vendor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vendorService: VendorService
  ) { }

  saveVendor(): void {
    this.vendorService.change(this.vendor).subscribe({
      next: (response) => {
        console.debug("User Successfully Changed!", response);
        this.router.navigateByUrl("/vendor/vendor-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.vendorService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Vendor To Change!", response);
        this.vendor = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
