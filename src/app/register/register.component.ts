import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    public hide: boolean = true
    public id: number = 1
    public name: string = ""
    public password: string = ""
    public passwordRepeat: string = ""
  
  
    constructor(public ui:UiService) {}
  
  
    ngOnInit(): void {
      
    }
  
}
