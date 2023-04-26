import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {

  pageName = "User Create"
  newUser: User = new User();

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  createUser(): void {
    this.userService.create(this.newUser).subscribe({
      next: (response) => {
        console.debug("User Successfully Created!", response);
        this.router.navigateByUrl("/user/user-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.newUser.id = 0;
  }

}
