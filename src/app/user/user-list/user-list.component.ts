import { Component } from '@angular/core';

import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  pageName = "User List"
  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.list().subscribe({
      next: (response) => {
        console.debug("User List Retrieved!", response);
        this.users = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
