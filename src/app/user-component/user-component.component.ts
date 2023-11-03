import { Component, OnChanges, Input, OnInit, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit{

  
  constructor(public userService : UserServiceService){}

  ngOnInit(): void {
    console.log(this.userService.getUserDetails());

    this.userService.setUserDetails("MS");

  }
  submit(newItem : string)
  {
    console.log(newItem);
  }

}
