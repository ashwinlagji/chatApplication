import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';

import { AuthModule } from './auth-module/auth-module.module';
import { FirebaseModule } from './firebase';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from "./auth-module/auth.service";
import { UsersService } from './core/users.service';

import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    RouterModule.forRoot(routes)
  ],
    providers: [AuthResolver, AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
