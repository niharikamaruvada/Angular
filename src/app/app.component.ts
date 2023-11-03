import { Component, OnInit } from '@angular/core';
import { UserComponentComponent } from './user-component/user-component.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  title = 'angular-tour-of-heroes';
 
  firstName = 'Niharika';
  lastName = 'Maruvada';

  newdata : any;
  constructor(private _dataservice : DataService) 
  {

  }
  ngOnInit()
  {
    
  }

  
 

}
