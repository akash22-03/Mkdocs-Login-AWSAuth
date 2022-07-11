import { Component } from '@angular/core';
import { CognitoService } from '../cognito.service';
import { User } from '../User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})

export class SignInComponent {

  constructor(private cognitoService: CognitoService){}

  public signIn(): void 
  {
    let user : User = {
      email : (<HTMLInputElement>document.getElementById("email")).value,
      password : (<HTMLInputElement>document.getElementById("password")).value
    }
    console.log(user)
    this.cognitoService.signIn(user)
  }
}