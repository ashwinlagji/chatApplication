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

    getDisplayName(id: String): String {

        let displayName = "";
        this.Users.subscribe((users) => {
            console.log("Users Found...." + users);
        })

        return "Display_Name";
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