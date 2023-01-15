import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { pipe, take } from 'rxjs';
import { Member } from 'src/Member';

@Injectable({
  providedIn: 'root'
})
export class UiService {


  private showLogin = true
  private name : string | undefined
  private loading = false
  

  

  constructor(private http: HttpClient) {

      const name = localStorage.getItem("name")
      const password = localStorage.getItem("password")

    }
  
    public getShowLogin(): boolean {
      return this.showLogin
    }

    public getName(): string | undefined {
      return this.name
    }

    public getLoading(): boolean {
      return this.loading
    }

    public tryRegister (name: string, password: string): void {
      this.register
    }

    public register (name: string, password: string): void {
      this.http.post(`http://localhost:8080/member`,{
        id: null,
        name,
        password
      })
      .pipe(take(1))
      .subscribe({
        next: () => {this.tryLogin(name, password)},
        error: () => {Error('Failed to register')}
      })
    }

    public tryLogin(name: string, password: string): void {
      this.http.get<Member>(`http://localhost:8080/members?name=${name}&password=${password}`)
      .pipe(take(1))
      .subscribe({
        next: member => {
          this.loginSuccess(member)
        },
        error: () => { Error("Oops, something went wrong")}
      })

    }

    public loginSuccess (member: Member): void {
      this.showLogin = false
      this.name = member.name
      localStorage.setItem("name", member.name)
      localStorage.setItem("password", member.password)
    }

    public startRecipe (recipeName: string, recipeImg: string, recipeItems: string, recipePrep: string): void {
      this.http.post(`http://localhost:8080/recipes`, {
        id: null,
        recipeName,
        recipeImg,
        recipeItems,
        recipePrep
      })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.loadingTime()
        },
        error: () => { Error ("Cant fix your recipe now")
        }
      })
    }

    private loadingTime(): void {
      this.loading = true
    }

    public stockItem (itemName: string, itemUnit: number, itemImg: string): void {
      this.http.post(`http://localhost:8080/items`,{
        itemName,
        itemUnit,
        itemImg
      })
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.loadingTime()
        },
        error: () => { Error ("Cant store the item")}
      })
    }

    public logout(): void {
      this.showLogin = true
      this.loading = false
      this.name = undefined
      localStorage.clear()
    }

    



}
