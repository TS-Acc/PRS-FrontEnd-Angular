import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  userLoggedIn: User | null = null;

  constructor(
    private router: Router
  ) { }

  // checkLogin(): void {
  //   if(this.userLoggedIn === null) {
  //     this.router.navigateByUrl("/core/login");
  //   }
  // }

  setUserLoggedInToNull(): void {
    if(this.userLoggedIn !== null) {
      this.userLoggedIn === null;
    }
  }

}
