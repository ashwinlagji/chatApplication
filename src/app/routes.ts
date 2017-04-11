import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthResolver } from './resolvers/auth.resolver';
import { MessageComponent } from './message/message.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthResolver] },
    { path: 'a/:id', component: MessageComponent, canActivate: [AuthResolver] }
//    { path: 'product-details/:id', component: ProductDetails }
];