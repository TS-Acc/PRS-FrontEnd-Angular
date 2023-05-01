import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent {

  pageName = "Request Change";
  request!: Request;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) { }

  saveRequest(): void {
    this.requestService.change(this.request).subscribe({
      next: (response) => {
        console.debug("Request Successfully Changed!", response);
        this.router.navigateByUrl("/request/request-list");
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {
    let id: number = Number(this.activatedRoute.snapshot.params["id"]);
    this.requestService.get(id).subscribe({
      next: (response) => {
        console.debug("Retrieved Request To Change!", response);
        this.request = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
