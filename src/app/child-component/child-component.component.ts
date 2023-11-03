import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})

export class ChildComponentComponent {

  @Output() newItemEvent = new EventEmitter<string>();

   submit(value : string)
   {
    this.newItemEvent.emit(value);
   }

 
 

}
