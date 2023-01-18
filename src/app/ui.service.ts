import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pipe, take } from 'rxjs';
import { Member } from 'src/Member';
import { Item } from 'src/Item';
import { Recipe } from 'src/Recipe';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  public showRegister: boolean = false
  public showLogin: boolean = false
  public showItem: boolean = false
  public showRecipe: boolean = false
  public showItemList: boolean = false
  public name : string | undefined
  
  
  public disabled: boolean = false



  constructor(private http: HttpClient) {

      const name = localStorage.getItem("name")
      const password = localStorage.getItem("password")

    }

    // getItems() {
    //   return this.items;
    // }

    // addItem(item) {
    //   this.items.push(item);
    // }

    // removeItem(item) {
    //   const index = this.items.indexOf(item);
    //   this.items.splice(index, i);
    // }
    // }

    // public getShowRegister(): boolean {
    //   return this.showRegister
    // }
  
    // public getShowLogin(): boolean {
    //   return this.showLogin
    // }

    // public getShowItem(): boolean {
    //   return this.showItem
    // }

    // public getShowRecipe(): boolean {
    //   return this.showRecipe
    // }

    // public getShowItemList(): boolean {
    //   return this.showItemList
    // }

    public getName(): string | undefined {
      return this.name
    }

    public loading() {
      this.showRegister = false;
      this.showLogin = false;
      this.showItem = false;
      this.showRecipe = false;
      this.showItemList = false;
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
        error: () => {Error('Failed to register')}
      })
    }

    public tryLogin(name: string, password: string): void {
      this.http.get<Member>('http://localhost:8080/members?name=${name}&password=${password}')
      .pipe(take(1))
      .subscribe({
        next: member => {this.loginSuccess(member)},
        error: () => { Error("Oops, something went wrong")}
      })

    }

    public loginSuccess (member: Member): void {
      this.disabled = true
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
        error: () => { Error ("Cant store the item")}
      })
    }

    public startRecipe (recipeName: string, recipeImg: string, recipeItems: string, recipePrep: string): void {
      this.http.post(`http://localhost:8080/recipe`, {
        id: null,
        recipeName,
        recipeImg,
        recipeItems,
        recipePrep
      })
      .pipe(take(1))
      .subscribe({
        next: () => {this.loading()},
        error: () => { Error ("Cant fix your recipe now")}
      })
    }

    public pickedItems (item: Item): void {
      this.http.put(`http://localhost:8080/item/${item.id}`,{ item
    })
        .pipe(take(1))
        .subscribe ({
          next: () => {this.displayRecipe()},
          error: () => { Error ("Can't pick item")}
        })
    }

    public logout(): void {
      this.loading();
      this.disabled = true;
      this.name = undefined;
      localStorage.clear();
    }

    



}
