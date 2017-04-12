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

    id: string = "";
    types: string = "";
    messages;
    user;
    newMessage: string="";
    listAllMes: FirebaseListObservable < any > ;
    constructor(private route: ActivatedRoute, private messageService: MessageService, private usersService:UsersService) {

    }

    ngOnInit() {
        let sub = this.route.params.subscribe(params => {
            this.id = params['groupName'];
            console.log(this.id);
            this.listAllMes = this.messageService.getMessages(this.id);
            this.listAllMes.subscribe( data =>{
                                      
                                      this.messages = data;
                                      });
            
            this.user = this.usersService.getloggedInUser;
            
        });
        
    }

    addMessage() {
        let newMessages = {
            userID: this.user.Id,
            userName: this.user.Name,
            body: this.newMessage,
            timestamp: null
        }
        newMessages.timestamp = firebase.database.ServerValue.TIMESTAMP;
        this.messageService.sendMessage(this.id, newMessages);
        this.newMessage = "";
        
    }

}
