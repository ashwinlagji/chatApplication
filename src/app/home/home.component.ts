import { Component } from '@angular/core';

import { AuthService } from '../auth-module/auth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass'],
providers: [AuthService]
    })

export class HomeComponent {

constructor(private authService:AuthService){
}
ngOnInit() {
}
    title = 'app works!';
    message = "home Component";
}
