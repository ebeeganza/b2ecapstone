import { Item } from "./Item";
import { RecipeItems } from "./RecipeItems";

export class Recipe { 

    constructor ( 
        public id: null,
        public recipeName: string,
        public recipeImg: string,
        public recipeItems: RecipeItems[],
        public recipePrep: string,
    ){ }
}