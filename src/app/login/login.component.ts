import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public hide: boolean = true
  public name: string = ""
  public password: string = ""


  constructor(public ui:UiService) {}


  ngOnInit(): void {
    
  }

}
