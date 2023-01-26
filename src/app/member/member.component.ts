import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Member';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit{

  public id: number = 1
  public name: string = ""
  public password: string = ""
  public passwordRepeat: string = ""

  


  constructor(public ui:UiService){
    this.ui.getAllMembers();
  }

  ngOnInit(): void {
    
  }
}
