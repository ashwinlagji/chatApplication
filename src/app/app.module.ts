import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';

import { AuthModule } from './auth-module/auth-module.module';
import { FirebaseModule } from './firebase';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthResolver } from './resolvers/auth.resolver';
import { AuthService } from "./auth-module/auth.service";
import { UsersService } from './core/users.service';
import { GroupsService } from './core/groups.service';
import { MessageService } from './core/messages.service';
import { GroupMessagesResolve } from './resolvers/group-messages.resolver';
import { UserMessagesResolve } from './resolvers/user-messages.resolver';


import { routes } from './routes';
import { GroupsComponent } from './groups/groups.component';
import { MessageComponent } from './message/message.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';


//material designs
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdIconModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GroupsComponent,
    MessageComponent,
    UsersComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FirebaseModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
      MdIconModule,
    RouterModule.forRoot(routes)
  ],
    providers: [AuthResolver, AuthService, UsersService, GroupsService, MessageService, UserMessagesResolve, GroupMessagesResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
