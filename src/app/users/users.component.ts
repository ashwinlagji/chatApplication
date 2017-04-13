import { Component, OnInit } from '@angular/core';

import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users;
  public loggedInUser;
  constructor(private usersService: UsersService) { }

  ngOnInit() {

      const users = this.usersService.getAll;
      users.subscribe(snapshot => {
          this.users = snapshot;
      });

      this.loggedInUser = this.usersService.getloggedInUser;
  }

}
