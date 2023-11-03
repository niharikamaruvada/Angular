import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit{

  dataset : any[] = [];

  constructor(private dataService : DataService) {}


  ngOnInit() : void {
   this.dataService.getData().subscribe((data) => {
    this.dataset = data;
   })
  }

}
