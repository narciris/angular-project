import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user-component',
  imports: [GamesComponent],
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
