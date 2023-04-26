import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../menu.class';
import { SystemService } from '../../core/system.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  menus: Menu[] = [
    { display: "Orders", route: "/user/user-list" },
    { display: "Vendors", route: "/vendor/vendor-list"}
  ];

  signOut: Menu = { display: "Sign Out", route: "/core/login"};

  constructor(
    private router: Router,
    private systemService: SystemService
  ) { }

  signOutUser(): void {
    this.systemService.setUserLoggedInToNull();
    this.router.navigateByUrl("/core/login");
  }

}
