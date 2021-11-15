import { UserService } from 'src/app/Services/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignalrService } from './signalr.service';
import { IUserDto } from '../Helper/Models/UserDto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  root = 'http://217.96.199.163:4000/users/';

  public static tokenChecked = false;

  constructor(private http: HttpClient, private router: Router) { }

  GetToken(): string
  {
    let token = localStorage.getItem('id-token');
    if(token != null)
    {
      return token
    }
    else return '';
  }

  CheckToken(): void
  {
    console.info(this.GetToken());
    console.info(this.root);
    this.http.get<IUserDto>(this.root+'CheckToken',
    {observe: 'response'})
    .subscribe(
      r =>
      {
        this.http.get<IUserDto>("http://217.96.199.163:4000/users")
        .subscribe(
          r =>
          {
            UserService.User = r;
            UserService.IsLoggin = true;
            TokenService.tokenChecked = true;
            this.router.navigateByUrl('')
          },
          err =>
          {
            UserService.IsLoggin = false;
            TokenService.tokenChecked = true;
            localStorage.removeItem('id-token');
            this.router.navigateByUrl('/LoginPanel');
          }
        )
      },
      err =>
      {
        UserService.IsLoggin = false;
        TokenService.tokenChecked = true;
        localStorage.removeItem('id-token');
        this.router.navigateByUrl('/LoginPanel');
      }
    )
  }
}
