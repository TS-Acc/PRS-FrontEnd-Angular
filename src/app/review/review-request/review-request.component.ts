import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';

@Component({
  selector: 'app-review-request',
  templateUrl: './review-request.component.html',
  styleUrls: ['./review-request.component.css']
})
export class ReviewRequestComponent {

  pageName = "Review Request";
  rejectionInputVisible: boolean = false;
  rejectionReason: string = "";
  request!: Request;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService,
    private router: Router
  ) { }

  markAsApproved(request: Request): void {
    this.requestService.approveRequest(request).subscribe({
      next: (response) => {
        console.debug("Request Marked As Approved!", response);
        this.router.navigateByUrl("/request/request-list")
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  markAsRejected(request: Request): void {
      this.requestService.rejectRequest(request).subscribe({
        next: (response) => {
        console.debug("Request Marked As Rejected!", response);
        console.log("What is it", this.request);
        this.router.navigateByUrl("/request/request-list")
        },
        error: (error) => {
        console.error(error);
      }
    });
  }

  showRejectionReasonInput(): void {
    this.rejectionInputVisible = !this.rejectionInputVisible;
  }

  updateRejectionReason(request: Request): void {
    request.rejectionReason = this.rejectionReason;
    this.requestService.change(request).subscribe({
      next: (response) => {
        console.debug("Rejection Reason Updated!", response);
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
        console.debug("Retrieved Request!", response);
        this.request = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
