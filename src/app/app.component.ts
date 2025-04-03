import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { GamesComponent } from './games/games.component';
import { CommentComponent } from "./comment/comment.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponentComponent, CommentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  city = 'Colombia';

}
