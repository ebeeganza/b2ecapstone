import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';
import { UiService } from '../ui.service';
import { MatListModule } from '@angular/material/list';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatListOption, MatSelectionList } from '@angular/material/list';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  
})
export class ItemListComponent implements OnInit{
      
  public id: number = 1
  public itemName: string = ""
  public itemImg: string = ""
  public itemUnit: number = 1
  
      

 

  constructor(public ui:UiService ){
     this.ui.getAllItems();
  }
  ngOnInit() {
  
    
    
  }
  
}
