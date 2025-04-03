import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password= '';
  islogged= false;
  message = '';

  onLogin() : void{

    if(this.username === 'narciris.mena@example.co' && this.password === '1234'){
      this.islogged = true;
      this.message = "logeado con exito"
    }else{
        this.message = "Error: contraseña o usuario incorrectos";
    }
  }

}
