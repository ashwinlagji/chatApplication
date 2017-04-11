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

    constructor(private authService: AuthService, private usersService: UsersService, private router: Router) {}
    ngOnInit() {}

    signIn(name: string) {
        const promise = this.authService.signInWithGithub();
        promise.then(result => {
            this.usersService.saveDisplayName(result.uid, result.auth.displayName, result.auth.email, result.auth.photoURL);
            this.router.navigate(['home']);
        });
    }
}
