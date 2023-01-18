import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
        public id = null
        public itemName: string = ""
        public itemUnit: number = 1
        public itemImg: string = ""


        // newItem = '';
        // itemControl = new FormControl();

constructor(public ui:UiService){}

// addItem() {
//   this.ui.addItem(this.newItem);
//   this.newItem = '';
// }

  ngOnInit(): void {
    
  }
}
