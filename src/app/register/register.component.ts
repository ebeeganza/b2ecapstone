import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    public hide: boolean = true
    public name = ""
    public password = ""
    public passwordRepeat = ""
  
  
    constructor() {}
  
  
    ngOnInit(): void {
      
    }
  
}
