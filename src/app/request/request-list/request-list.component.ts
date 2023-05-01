import { Component } from '@angular/core';

import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

  pageName = "Request List"
  requests: Request[] = [];
  
  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit(): void {
    this.requestService.list().subscribe({
      next: (response) => {
        console.debug("Request List Retrieved!", response);
        this.requests = response;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
