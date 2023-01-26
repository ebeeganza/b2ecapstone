import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';


import { FormArray, FormGroup } from '@angular/forms';
import { Item } from 'src/Item';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipeName: string = ""
  public recipeImg: string = ""
  public recipeItems: [] = []
  public recipePrep: string = ""



  
constructor(public ui:UiService){}
  

  ngOnInit(): void {

    
    
  }
}
