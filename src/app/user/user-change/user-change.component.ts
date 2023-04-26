import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent {

  pageName = "Change User"
  user!: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  saveUser(): void {
    this.userService.change(this.user).subscribe({
      next: (response) => {
        console.debug("User Successfully Changed!", response);
        this.router.navigateByUrl("/user/user-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  
  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.userService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved User To Change!", response);
        this.user = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
