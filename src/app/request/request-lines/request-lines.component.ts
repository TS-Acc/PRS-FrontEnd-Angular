import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Request } from '../request.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {

  pageName = "Request Lines";
  request!: Request;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestlineService: RequestlineService,
    private requestService: RequestService,
    private router: Router
  ) { }

  deleteRequestline(id: number): void {
    this.requestlineService.remove(id).subscribe({
      next: (response) => {
        console.debug("Requestline Deleted!", response);
        this.router.navigateByUrl(`/request/request-lines/${this.request.id}`);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  reviewRequest(request: Request): void {
    this.requestService.reviewRequest(request).subscribe({
      next: (response) => {
        console.debug("Request Changed To Review Status", response);
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
        console.debug("Retrieved Request For Request Lines Page!", response);
        this.request = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
