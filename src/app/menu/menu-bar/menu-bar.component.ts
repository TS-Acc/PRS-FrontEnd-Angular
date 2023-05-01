import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../menu.class';
import { SystemService } from '../../core/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  navBarUser: string = "";

  menus: Menu[] = [
    { display: "Users", route: "/user/user-list" },
    { display: "Vendors", route: "/vendor/vendor-list"},
    { display: "Products", route: "/product/product-list"},
    { display: "Requests", route: "/request/request-list"},
    { display: "Reviews", route: "/review/review-list"}
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

  ngOnInit(): void {
    if(this.systemService.userLoggedIn !== null) {
      let user: User = this.systemService.userLoggedIn;
      this.navBarUser = user.username;
    }
  }

}
