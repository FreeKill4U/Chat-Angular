import { IUpdateUserDto } from './../Helper/Models/UpdateUserDto';
import { TokenService } from './token.service';
import { SignalrService } from './signalr.service';
import { ISendMessageDto, SendMessageDto } from './../Helper/Models/SendMessageDto';
import { ChatService } from './chat.service';
import { UserDto } from './../Helper/Models/UserDto';
import { IRegisterDto } from './../Helper/Models/RegisterDto';
import { IUserDto } from '../Helper/Models/UserDto';
import { LoginDto, ILoginDto } from '../Helper/Models/LoginDto';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  public static IsLoggin = false;
  public static User: IUserDto;
  public static Id = "http://217.96.199.178:4000/";

  root = UserService.Id+'users/';

  constructor(private http: HttpClient, private router: Router, private tokenService: TokenService)
  {
    if(localStorage.getItem('id-token') != null)
    {
      UserService.IsLoggin = true;
    }
    else
     UserService.IsLoggin = false;

  }

  Login(model: ILoginDto): Observable<IUserDto>
  {
    let response = this.http.post<IUserDto>(this.root+'login', model);
    return response;
  }

  LoginConfig(res: any)
  {
    UserService.User = res;
    UserService.IsLoggin = true;
    localStorage.setItem('id-token', res.token);

    console.warn(this.tokenService.GetToken());

    console.log(UserService.User)
  }

  Logout()
  {
    UserService.User = new UserDto();
    UserService.IsLoggin = false;
    localStorage.removeItem('id-token');
    console.warn(this.tokenService.GetToken());
  }

  Register(model: IRegisterDto): Observable<IUserDto>
  {

    let response = this.http.post<IUserDto>(this.root+'Register', model);

      return response;
  }

  Update(model: IUpdateUserDto): Observable<IUpdateUserDto>
  {

    let response = this.http.post<IUpdateUserDto>(this.root+'Update', model);

    return response;
  }

}
