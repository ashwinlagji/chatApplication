import {
    Component,
    OnInit
} from '@angular/core';

import {
    ActivatedRoute
} from '@angular/router';

import {
    AngularFire,
    FirebaseObjectObservable,
    FirebaseListObservable
} from 'angularfire2';

import {
    MessageService
} from '../core/messages.service';


import { UsersService } from '../core/users.service';

import * as firebase from 'firebase';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

    id = '';
    types = '';
    messages;
    user;
    newMessage = '';
    personalMessage = false;
    listAllMes: FirebaseListObservable < any > ;
    constructor(private route: ActivatedRoute, private messageService: MessageService, private usersService: UsersService) {

    }

    ngOnInit() {
        const sub = this.route.params.subscribe(params => {

            if ( params['groupName']) {

            this.id = params['groupName'];
            console.log(this.id);
            this.listAllMes = this.messageService.getGroupMessages(this.id);
            this.listAllMes.subscribe( data => {
                                      this.messages = data;
                                      });
            }
            else if (params['userName']) {
                this.id = params['userName'];
                console.log(this.id);
                this.personalMessage = true;
                this.user = this.usersService.getloggedInUser;
                this.listAllMes = this.messageService.getUserMessages(this.id, this.user.Id);
                this.listAllMes.subscribe( data => {
                                      this.messages = data;
                                      });
            }

            this.user = this.usersService.getloggedInUser;

        });

    }

    addMessage() {

        const newMessages = {
            userID: this.user.Id,
            userName: this.user.Name,
            body: this.newMessage,
            timestamp: null
        };
        newMessages.timestamp = firebase.database.ServerValue.TIMESTAMP;
        if(!this.personalMessage)
            this.messageService.sendGroupMessage(this.id, newMessages);
        else
            this.messageService.sendUserMessage(this.id, this.user.Id, newMessages);
        this.newMessage = '';

    }


}
