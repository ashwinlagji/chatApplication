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

    getMessages(group) {

        return this.af.database.list('/messages/' + group);

    }

    sendMessage(type, message){
        
        this.af.database.list('/messages/' + type).push(message);
    }
    
}
