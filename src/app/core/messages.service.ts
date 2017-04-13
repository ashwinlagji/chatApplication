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

        return this.af.database.list('/messages/' + group);

    }
    
    getUserMessages(user1, User2) {
        
        let databasePathref = (user1.Id > User2.Id: user1.Id + User2.Id ? User2.Id + user1.Id);
        
        return this.af.database.list('/messages/' +databasePathref);

    }

    sendMessage(type, message){
        
        this.af.database.list('/messages/' + type).push(message);
    }
    
}
