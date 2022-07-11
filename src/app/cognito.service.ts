import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})

export class CognitoService {

  constructor() {
    Amplify.configure({
      Auth: {
        userPoolId: 'us-west-1_mlI3egla3',
        userPoolWebClientId: '7pd5iej8dotokdduhse5b9ht1f',
      }
    });
  }
  
  public signIn(user: User): Promise<any> {
    return Auth.signIn(user.email, user.password)
    .then(() => {
      window.location.href = "http://localhost:8000/";
    }).catch(err =>{
      window.location.href = "https://www.google.co.in/ ";
    });
  }
}
