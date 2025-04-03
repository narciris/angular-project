import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-user-component',
  standalone: true,
  imports: [GamesComponent,LoginComponent],
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {
  username = 'Nar';
  isLogged = false;
  greet() {
    alert('Hola');
  }
  favGame = '';
  getFavGame(getName:string){
    this.favGame = getName;
  }

}
