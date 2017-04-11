import {
    Injectable
} from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import {
    Observable
} from 'rxjs/Rx';
import {
    AuthService
} from '../auth-module/auth.service';
import {
    Router
} from '@angular/router';
import {
    CanActivate
} from '@angular/router';

@Injectable()
export class AuthResolver implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(): boolean | Promise<boolean> | Observable<boolean> {
        console.log(this.auth.authenticated);
        if (!this.auth.authenticated) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }

}
