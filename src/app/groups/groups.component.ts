import { Component, OnInit } from '@angular/core';

import { GroupsService } from '../core/groups.service';
import {
    Router
} from '@angular/router';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass']
})
export class GroupsComponent implements OnInit {

  groups: any;
  newGroup = {
      name: ''
  }
    
  constructor(private groupsService:GroupsService, private router:Router) { 
  
  }

  ngOnInit() {
      var groups = this.groupsService.getAll;
      groups.subscribe(snapshot =>{
          console.log(snapshot);
          this.groups = snapshot;
      });
  }

  createGroup(){
      this.groupsService.createGroup(this.newGroup.name);
      this.newGroup.name = '';
  }
onSelect(id) {
    this.router.navigate(['/a', id]);
  }
}
