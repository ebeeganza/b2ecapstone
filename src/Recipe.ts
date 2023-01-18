import { Item } from "./Item";

export class Recipe { 

    constructor ( 
        public id: number | null,
        public recipeName: string,
        public recipeImg: string,
        public recipeItems: Item[],
        public recipePrep: string,
    ){ }
}