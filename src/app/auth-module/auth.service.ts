import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
    private authState = null;

      constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
        console.log(auth)
        this.authState = auth;
    });
  }

      get authenticated(): boolean {
        return this.authState !== null;
      }

      get id(): string {
        return this.authenticated ? this.authState.uid : '';
      }

      signIn(provider: number) {
        return this.af.auth.login({provider})
          .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
      }

      signInAnonymously(){
        return this.af.auth.login({
          provider: AuthProviders.Anonymous,
          method: AuthMethods.Anonymous
        })
          .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));
      }

      signInWithGithub(){
        return this.af.auth.login({
            provider: AuthProviders.Github,
        method: AuthMethods.Popup
        });
      }

        loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

      signOut(): void {
        this.af.auth.logout();
      }
}
