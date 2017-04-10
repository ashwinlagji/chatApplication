import { Component } from '@angular/core';

import { AuthService } from './auth-module/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {

    constructor(private authService:AuthService){
    }
    ngOnInit() {
        this.authService.signInWithGithub();
    }
  title = 'app works!';
  message = "";
}
