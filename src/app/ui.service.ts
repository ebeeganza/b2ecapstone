import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pipe, take } from 'rxjs';
import { Member } from 'src/Member';
import { Item } from 'src/Item';
import { Recipe } from 'src/Recipe';
import { RecipeItems } from 'src/RecipeItems';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  public showRegister: boolean = false
  public showLogin: boolean = false
  public showItem: boolean = false
  public showRecipe: boolean = false
  public showItemList: boolean = false
  public showRecipeList: boolean = false
  public showMember: boolean = false
  public showRecipeItem: boolean = false
  private name : string | undefined
  
  
  public isDisabled: boolean = true
  public isDisabledR: boolean = false


  public items: Item[] = [];
  public recipeItems: RecipeItems[] = [];
  public recipes: Recipe[] = [];
  public members: Member[] = [];




  constructor(private http: HttpClient, private snackBar: MatSnackBar) {

      const name = localStorage.getItem("name")
      const password = localStorage.getItem("password")

    }

    public getName(): string | undefined {
      return this.name
    }

    public loading() {
      this.showRegister = false;
      this.showLogin = false;
      this.showItem = false;
      this.showRecipe = false;
      this.showItemList = false;
      this.showRecipeList = false;
      this.showMember = false;
      this.showRecipeItem = false
    }

    public displayRegister() {
      this.loading();
      this.showRegister = true;
    }

    public displayLogin() {
      this.loading();
      this.showLogin = true;
    }

    public displayItem() {
      this.loading();
      this.showItem = true;
    }

    public displayRecipe() {
      this.loading();
      this.showRecipe = true;
    }

    public displayItemList() {
      this.loading();
      this.showItemList = true;
    }

    public displayRecipeList() {
      this.loading();
      this.showRecipeList = true;
    }

    public displayMember() {
      this.loading();
      this.showMember = true;
    }

    public displayRecipeItem() {
      this.loading();
      this.showRecipeItem = true;
    }

    public tryRegister (name: string, password: string, passwordRepeat: string): void {
      this.register
    }

    public register (name: string, password: string, passwordRepeat: string): void {
      this.http.post(`http://localhost:8080/member`,{
        id: null,
        name,
        password,
        passwordRepeat
      })
      .pipe(take(1))
      .subscribe({
        next: () => {this.loading()},
        error: () => this.showError('Failed to register')
      })
    }

    public tryLogin(name: string, password: string): void {
      this.http.get<Member[]>(`http://localhost:8080/member?name=${name}&password=${password}`)
    .pipe(take(1))
    .subscribe({
      next: member => { if (member.length!==1) { this.showError("invalid name and/or password")}
    },
      error: () => this.showError('Failed to login')
    })
    return this.loginSuccess(name)
    }
    
    public loginSuccess (member:Member): void {
      this.loading()
      this.isDisabled = false
      this.isDisabledR = true
      this.name = member.name
      localStorage.setItem("name", member.name)
      localStorage.setItem("password", member.password)
    }

    public stockItem (itemName: string, itemUnit: number, itemImg: string): void {
      this.http.post(`http://localhost:8080/item`,{
        id: null,
        itemName,
        itemUnit,
        itemImg
      })
      .pipe(take(1))
      .subscribe({
        next: () => {this.loading()},
        error: () => this.showError ("Can't store the item")
      })
    }

    public addItemToRecipeItems(item: Item): void {
      var newRecipeItem = new RecipeItems(-1, item.itemName, 0)
      this.recipeItems.push(newRecipeItem)
    } 


    public newRecipe (recipeName: string, recipeImg: string, recipePrep: string): void {
      let recipeItems = this.recipeItems
      let recipe = new Recipe(null, recipeName,recipeImg, recipeItems, recipePrep)
      this.http.post(`http://localhost:8080/recipe`,{ id:null, recipeName,recipeImg, recipeItems,recipePrep
    })
      .pipe(take(1))
      .subscribe({
        next: () => {this.loading()},
        error: () => this.showError ("Oops, Cant fix your recipe now")
      })
    }

    public logout(): void {
      this.loading();
      this.isDisabled = true;
      this.name = undefined;
      localStorage.clear();
    }

    public getAllMembers(): void {
      this.http.get<Member[]>('http://localhost:8080/member')
    .pipe(take(1))
    .subscribe({
      next: (Member) => {this.members = Member},
      error: () => this.showError('Failed to get members')
    })
    }

    public getAllItems(): void {
      this.http.get<Item[]>('http://localhost:8080/item')
    .pipe(take(1))
    .subscribe({
      next: (Item) => {this.items = Item},
      error: () => this.showError('Failed to get items')
    })
    }

    public getAllRecipe(): void {
      this.http.get<Recipe[]>('http://localhost:8080/recipe')
    .pipe(take(1))
    .subscribe({
      next: (Recipe) => {this.recipes = Recipe},
      error: () => this.showError('Failed to get recipes')
    })
    }

    public deleteItem(id: number|null): void {
      this.http.delete(`http://localhost:8080/item/${id}`)
        .pipe(take(1))
        .subscribe({
          next: () => {this.displayItemList()},
          error: () => this.showError('Failed to delete item')
        })
    }

    public deleteRecipe(id: number|null): void {
      this.http.delete(`http://localhost:8080/recipe/${id}`)
        .pipe(take(1))
        .subscribe({
          next: () => {this.loading()},
          error: () => this.showError('Failed to delete recipe')
        })
    }

    public removeMember(id: number|null): void {
      this.http.delete(`http://localhost:8080/member/${id}`)
        .pipe(take(1))
        .subscribe({
          next: () => {this.loading()},
          error: () => this.showError('Failed to delete member')
        })
    }

    public modifyMember(member: Member): void {
      this.http.put(`http://localhost:8080/member/${member.id}`, member)
        .pipe(take(1))
        .subscribe({
          next: () => this.loading(),
          error: () => this.showError("Error updating member record")
        })
    }

    public modifyRecipe(recipe: Recipe): void {
      this.http.put(`http://localhost:8080/recipe/${recipe.id}`, recipe)
        .pipe(take(1))
        .subscribe({
          next: () => this.loading(),
          error: () => this.showError("Error updating recipe")
        })
    }

    public updateItem(id: number): void {
      this.http.put(`http://localhost:8080/item/${id}`, Item)
        .pipe(take(1))
        .subscribe({
          next: () => this.loading(),
          error: () => this.showError("Error updating item")
        })
    }

    public showError(message: string): void {    
      this.snackBar.open(message, undefined, {        
        duration: 2000
      });    
  }




  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(EditAccountComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  // getAccountByEmailandPassword(email: string, password: string): void {
  //   this.http
  //     .get<User>(`http://localhost:8080/users?email=${email}&password=${password}`)
  //     .pipe(take(1))
  //     .subscribe({
  //       next: member => {
  //         this.modifyMember = member
  //         this.openDialog('0ms', '0ms')
  //       },
  //       error: () => {
  //         this.showError('Failed to get account')
  //       }
  //     })
  // }





}
