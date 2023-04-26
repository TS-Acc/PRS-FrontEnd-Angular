import { Component } from '@angular/core';

import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  menus: Menu[] = [
    { display: "Order", route: "/user/user-list" }
  ];

}
