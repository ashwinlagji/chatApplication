import {
    Injectable
} from '@angular/core';
import {
    AngularFire,
    FirebaseObjectObservable,
    FirebaseListObservable
} from 'angularfire2';


@Injectable()
export class GroupsService {
    private Groups: FirebaseListObservable < any > ;

    constructor(private af: AngularFire) {
        this.Groups = this.af.database.list('/groups');
    }
    
    createGroup(Name){
        this.Groups.push({
            Name
        })
    }
    
    get getAll(){
        return this.Groups;
    }
}
