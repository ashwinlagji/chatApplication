import {
    Injectable
} from '@angular/core';
import {
    AngularFire,
    FirebaseObjectObservable,
    FirebaseListObservable
} from 'angularfire2';


@Injectable()
export class UsersService {
    private Users: FirebaseListObservable < any > ;
    private loggedInUser: any = null; 

    constructor(private af: AngularFire) {
        this.Users = this.af.database.list('/users');
    }
    
    saveLoggedInUserDetails(userDetails): void {
        
        this.loggedInUser = userDetails;
    }
    
    get getloggedInUser():any{
        return this.loggedInUser;
    }
    
    get getAll(){
        return this.Users;
    }

    getDisplayName(id: String): Promise<any> {

        let US = this.Users;
        return new Promise(function(resolve,reject){
            let displayName = "";
            US.subscribe((users) => {
                for(let user of users){
                    if (id === user.Id)
                        resolve(user);
                }
                reject("not found");
            });
        });
    }
    saveDisplayName(Id, Name, Email, AvatarUrl) {

        var user = this.af.database.list('/users',{ query: { orderByChild: 'Id', equalTo: Id } });
        user.subscribe(snapshot => {
            if(snapshot.length === 0){
                this.Users.push({
                    Id,
                    Name,
                    Email,
                    AvatarUrl
                });
            }
            
            this.saveLoggedInUserDetails({
                    Id,
                    Name,
                    Email,
                    AvatarUrl
                });
        });
        
    }

}
