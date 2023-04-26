import { Component } from '@angular/core';

import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {

  pageName = "Vendor List"
  vendors: Vendor[] = [];

  constructor(
    private vendorService: VendorService
  ) { }

  ngOnInit(): void {
    this.vendorService.list().subscribe({
      next: (response) => {
        console.debug("Vendor List Retrieved!", response);
        this.vendors = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
