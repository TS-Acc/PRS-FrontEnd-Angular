import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../system.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  pageName = "Login"
  username: string = "";
  password: string = "";
  errorMessage: string = "Invalid Username / Password";
  showErrorMessage: boolean = false;

  constructor(
    private router: Router,
    private systemService: SystemService,
    private userService: UserService
  ) { }

  login(): void {
    this.userService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.debug("Successfully Logged In! User Logged In:", response);
        this.systemService.userLoggedIn = response;
        this.router.navigateByUrl("/user/user-list");
      },
      error: (error) => {
        console.error(error);
        this.showErrorMessage = true;
      }
    });
  }

  ngOnInit(): void {
    this.systemService.userLoggedIn = null;
  }

}
