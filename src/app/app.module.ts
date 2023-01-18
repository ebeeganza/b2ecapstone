import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ItemComponent } from './item/item.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ItemListComponent } from './item-list/item-list.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDateRangeInput } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSelectionList, MatListOption } from '@angular/material/list'
import { FormArray, FormControl } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ItemComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    
    
    
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
