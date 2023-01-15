import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
      public item = []
      public unitNeeded = 1

  constructor(public ui:UiService){
       
  }

  ngOnInit(): void {
    
  }

}
