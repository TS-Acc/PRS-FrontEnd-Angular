import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { SystemService } from 'src/app/core/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {

  pageName = "Review List";
  userLoggedIn!: User;
  requestsInReview!: Request[];

  constructor(
    private requestService: RequestService,
    private router: Router,
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    if(this.systemService.userLoggedIn !== null) {
      this.userLoggedIn = this.systemService.userLoggedIn;
    }
    this.requestService.requestsInReviewStatus(this.userLoggedIn.id).subscribe({
      next: (response) => {
        console.debug("Retrieved Requests In Review!", response);
        this.requestsInReview = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
