import {
    Component
} from '@angular/core';

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
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
    providers: [AuthService]
})

export class LoginComponent {

    title = 'app works!';
    message = "Login Component";
    email: string;
    password: string;
    remail: string;
    rpassword: string;


    constructor(private authService: AuthService, private usersService: UsersService, private router: Router) {}
    ngOnInit() {}

    signIn(name: string) {
        const promise = this.authService.signInWithGoogle();
        promise.then(result => {
            this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
            this.router.navigate(['home']);
        });
    }

    login() {
        const promise = this.authService.signIn({
            email: this.email,
            password: this.password
        });
        promise.then(result => {
            this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
            this.router.navigate(['home']);
        });
    }

    register() {
        const promise = this.authService.registerUser(
            this.remail,
            this.rpassword
        );
        promise.then(result => {
            this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
            this.router.navigate(['login']);
        });
    }
}
