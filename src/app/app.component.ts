import { Component } from '@angular/core';

import { SystemService } from './core/system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'prs-frontend-solution-angular';

  constructor(
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.systemService.checkLogin();
    if(this.systemService.userLoggedIn !== null) {
      console.debug(`${this.systemService.userLoggedIn.username} is logged in!`)
    } else {
      console.debug("No one is logged in.")
    }
  }

}
