import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';


import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipeName = ""
  public recipeImg = ""
  public recipeItems = ""
  public recipePrep = ""


  
constructor(public ui:UiService){}
  

  ngOnInit(): void {

    
    
  }
}
