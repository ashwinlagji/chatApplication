import {
    Routes
} from '@angular/router';

import {
    AppComponent
} from './app.component';
import {
    LoginComponent
} from './login/login.component';
import {
    HomeComponent
} from './home/home.component';
import {
    AuthResolver
} from './resolvers/auth.resolver';
import {
    MessageComponent
} from './message/message.component';
import { GroupMessagesResolve } from './resolvers/group-messages.resolver';
import { UserMessagesResolve } from './resolvers/user-messages.resolver';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthResolver],
        children: [
            {
                path: '',
                redirectTo: 'child-two',
                pathMatch: 'full'
            },
            {
                path: 'child-one',
                component: MessageComponent
            },
            {
                path: 'child-two',
                component: HomeComponent
            },
            {
                path: 'group/:groupName/messages',
                component: MessageComponent,
                resolve: {
                    type: GroupMessagesResolve
                }
            },
            {
                path: 'user/:userName/messages',
                component: MessageComponent,
                resolve: {
                    type: UserMessagesResolve
                }
            }

            ]
    }
];
