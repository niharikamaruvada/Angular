import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  username: string = 'John Doe';

  constructor() {}
  ngOnInit()
  {
    setTimeout( () => {
      this.username = "John Smith";
    }, 3000 );
  }



}
