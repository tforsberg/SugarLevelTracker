import { Component, OnInit } from '@angular/core';
//import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sugar Level Tracker';
  // isAuthenticated: boolean;


  async ngOnInit() {
    // this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    // );
  }
}
