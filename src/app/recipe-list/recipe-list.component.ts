import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/Recipe';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{


  // public id = number = 1
  public recipeName = ""
  public recipeImg = ""
  public recipeItems = []
  public recipePrep = ""

  // public recipe: Recipe[] = [];
 

  
constructor(public ui:UiService){

    this.ui.getAllRecipe();  
}


  ngOnInit(): void {

    
    
  }
    
}





