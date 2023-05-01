import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from '../../core/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  pageName = "Request Create"
  user!: User;
  newRequest: Request = new Request();

  constructor(
    private requestService: RequestService,
    private router: Router,
    private systemService: SystemService
  ) { }

  createRequest(): void {
    this.requestService.create(this.newRequest).subscribe({
      next: (response) => {
        console.debug("Request Successfully Created", response);
        this.router.navigateByUrl("/request/request-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    this.newRequest.id = 0;
    if(this.systemService.userLoggedIn !== null) {
      this.user = this.systemService.userLoggedIn;
    }
    this.newRequest.userId = this.user.id;
  }

}
