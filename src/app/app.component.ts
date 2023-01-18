import { Component } from '@angular/core';
import { UiService } from './ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yemi-akinwale-pantry-fe';

  constructor(public ui:UiService) {}

  
}
