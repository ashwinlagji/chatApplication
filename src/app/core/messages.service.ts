import {
    Injectable
} from '@angular/core';
import {
    AngularFire,
    FirebaseObjectObservable,
    FirebaseListObservable
} from 'angularfire2';


@Injectable()
export class MessageService {

    constructor(private af: AngularFire) {
    }

    getGroupMessages(group) {
        return this.af.database.list('/messages/group/' + group);
    }
    
    getUserMessages(user1, user2) {
        let databasePathref = (user1 > user2)? (user1 + user2) : (user2 + user1);
        return this.af.database.list('/messages/users/' +databasePathref);

    }

    sendGroupMessage(type, message){
        this.af.database.list('/messages/group/' + type).push(message);
    }
    
    sendUserMessage(user1, user2, message){
        let databasePathref = (user1 > user2)? (user1 + user2) : (user2 + user1);
        this.af.database.list('/messages/users/' + databasePathref).push(message);

    }
    
}
