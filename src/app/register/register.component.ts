import { Component, OnInit } from '@angular/core';
import {
    AuthService
} from '../auth-module/auth.service';

import {
    UsersService
} from "../core/users.service";
import {
    Router
} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    email;
    password;

    constructor(private authService: AuthService, private usersService: UsersService, private router: Router) { }

  ngOnInit() {
  }

    register() {
        const promise = this.authService.registerUser(
            this.email,
            this.password
        );
        promise.then(result => {
            this.usersService.saveDisplayName(result.uid, result.auth.email, result.auth.email, result.auth.photoURL);
            this.router.navigate(['login']);
        });
    }
}
