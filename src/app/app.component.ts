import { Component } from '@angular/core';
import { mainUser } from './mainUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Twitter';
  user = mainUser;
}
