import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  pageName = "User Detail";
  displayVerifyButton = false;
  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  removeUser(): void {
    this.userService.remove(this.user.id).subscribe({
      next: (response) => {
        console.debug("User Deleted!", response);
        this.router.navigateByUrl("/user/user-list");
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
    this.userService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved User Details!", response);
        this.user = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
