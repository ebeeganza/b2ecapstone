import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';
import { Member } from 'src/Member';
import { UiService } from '../ui.service';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { ItemService } from 'src/itemService.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  
})
export class ItemListComponent implements OnInit{
      public id = null
      public itemName: string = ""
      public itemImg: string = ""
      public itemUnit: number = 1
      // public items: Item[] | undefined
      public unitNeeded: number = 1

items: any;

      

 

  constructor(public ui:UiService ){
   

  }
  ngOnInit() {
  
    
    
  }
  
}
