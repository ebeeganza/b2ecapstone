import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { Item } from 'src/Item';

@Component({
  selector: 'app-recipe-item-list',
  templateUrl: './recipe-item-list.component.html',
  styleUrls: ['./recipe-item-list.component.css']
})
export class RecipeItemListComponent implements OnInit {

  
    
    public recipeItemName: string = ""
    public unitNeeded: number = 1




  


  constructor(public ui:UiService) {}

  
  


  ngOnInit(): void {
    this.ui.getAllItems();
  }
}
