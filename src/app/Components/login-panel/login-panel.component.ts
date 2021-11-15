import { ILoginDto, LoginDto } from '../../Helper/Models/LoginDto';
import { UserService } from './../../Services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  info: string;
  loading = false;

  private loginModel: ILoginDto;

  constructor(private userService: UserService, private router: Router)
  {
    this.loginModel = new LoginDto();
  }

  Login()
  {
    this.loading = true;
    this.loginModel.Nick = this.loginForm.value.login;
    this.loginModel.Password = this.loginForm.value.password;

    if(this.FormValid())
    {
      this.userService.Login(this.loginModel).subscribe(r => {
        this.userService.LoginConfig(r);
        this.router.navigateByUrl('');
        this.loading = false;
      },
      err => {
        this.info = this.ErrorTranslate(err.status);

        if(typeof this.info != 'string')
            this.info = this.ErrorTranslate(999);
            this.loading = false;

      })
    }
  }

  FormValid(): boolean
  {
    if(this.loginForm.value.login != null
      && this.loginForm.value.password != null
      && this.loginForm.value.login != ''
      && this.loginForm.value.password != '')
      return true;
    else
    {
      this.info = this.ErrorTranslate(400);
      return false;
    }
  }

  ErrorTranslate(code: number): string
  {
    this.loading = false;
    switch(code)
    {
      case 0: {

        return 'Przepraszamy serwer nie działa';
        break;
      }
      case 400: {

      return 'Pola nie mogą być puste';
        break;
      }
      case 404: {

        return 'Niepoprawny login lub hasło';
          break;
      }
     default: {
        return 'Coś poszło nie tak';
      }
    }
  }

  ngOnInit(): void {
    if(!TokenService.tokenChecked)
    {
      this.router.navigateByUrl('/Loading')
    }
    else if(UserService.IsLoggin)
      this.router.navigateByUrl('')
  }
}
