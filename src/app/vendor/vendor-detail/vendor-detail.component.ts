import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {

  pageName = "Vendor Detail";
  displayVerifyButton = false;
  vendor!: Vendor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vendorService: VendorService
  ) { }

  removeVendor(): void {
    this.vendorService.remove(this.vendor.id).subscribe({
      next: (response) => {
        console.debug("Vendor Deleted!", response);
        this.router.navigateByUrl("/vendor/vendor-list");
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
    this.vendorService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Vendor Details!", response);
        this.vendor = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
