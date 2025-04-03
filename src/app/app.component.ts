import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  city = 'Colombia';
}
