import {
    Injectable
} from '@angular/core';
import {
    AngularFire,
    AuthProviders,
    AuthMethods
} from 'angularfire2';

@Injectable()
export class AuthService {
    private authState = null;

    constructor(public af: AngularFire) {
        this.af.auth.subscribe(auth => {
            this.authState = auth;
        });
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }
    registerUser(email, password) {
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    }
    signIn(user) {
        return this.af.auth.login({
            email: user.email,
            password: user.password,
        }, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password,
        }).catch(error => console.log('ERROR @ AuthService#signIn() :', error));
    }

    signInAnonymously() {
        return this.af.auth.login({
                provider: AuthProviders.Anonymous,
                method: AuthMethods.Anonymous
            })
            .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
    }

    signInWithGithub() {
        return this.af.auth.login({
            provider: AuthProviders.Github,
            method: AuthMethods.Popup
        }).catch(error => console.log('ERROR @ AuthService#signInWithGithub() :', error));
    }

    signInWithGoogle() {
        return this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup,
        }).catch(error => console.log('ERROR @ AuthService#loginWithGoogle() :', error));
    }

    signInWithFacebook() {

        return this.af.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup,
        }).catch(error => console.log('ERROR @ AuthService#loginWithFacebook() :', error));
    }

    signInWithTwitter() {
        return this.af.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Popup,
        }).catch(error => console.log('ERROR @ AuthService#loginWithTwitter() :', error));
    }

    signOut(): void {
        this.af.auth.logout();
    }
}
