import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { User } from '../../user/user.class';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {

  pageName = "Request Detail";
  displayVerifyButton = false;
  request!: Request;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) { }

  removeRequest(): void {
    this.requestService.remove(this.request.id).subscribe({
      next: (response) => {
        console.debug("Request Deleted!", response);
        this.router.navigateByUrl("/request/request-list");
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
    this.requestService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Request Details!", response);
        this.request = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
