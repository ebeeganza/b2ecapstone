import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
        public id = null
        public itemName = ""
        public itemUnit = 1
        public itemImg = ""

constructor(public ui:UiService){}

  ngOnInit(): void {
    
  }
}
