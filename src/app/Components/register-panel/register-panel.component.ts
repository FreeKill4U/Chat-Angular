import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterDto, RegisterDto } from 'src/app/Helper/Models/RegisterDto';
import { TokenService } from 'src/app/Services/token.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css']
})
export class RegisterPanelComponent implements OnInit {

  registerForm = new FormGroup({
    login: new FormControl(''),
    password1: new FormControl(''),
    password2: new FormControl(''),
  });

  info = "";
  loading = false;

  private registerModel: IRegisterDto;

  constructor(private userService: UserService, private router: Router)
  {
    this.registerModel = new RegisterDto();
  }

  Register(): void
  {
    this.loading = true;
    this.registerModel.Nick = this.registerForm.value.login;

    if(this.FormValid())
    {
      this.registerModel.Password = this.registerForm.value.password1;


      this.userService.Register(this.registerModel).subscribe(r =>
        {
          this.loading = false;
          this.router.navigateByUrl('/LoginPanel');
        },
        err => {
          this.info = this.ErrorTranslate(err.status);

          console.log(err);

          if(typeof this.info != 'string')
            this.info = this.ErrorTranslate(999);
          this.loading = false;
        });
    }
  }

  FormValid(): boolean
  {
    if(this.registerForm.value.login != null
      && this.registerForm.value.password1 != null
      && this.registerForm.value.password2 != null
      && this.registerForm.value.login != ''
      && this.registerForm.value.password1 != ''
      && this.registerForm.value.password2 != '')
    {
      if(this.CheckPassword(this.registerForm.value.password1, this.registerForm.value.password2))
        {
          return true;
        }
        else
        {
          this.info = this.ErrorTranslate(998);
          return false;
        }
    }
    else
    {
      this.info = this.ErrorTranslate(400);
      return false;
    }
  }

  CheckPassword(password1: string, password2: string): boolean
  {
    if(password1 == password2)
    {
      return true;
    }
    else
    {
      this.info = this.ErrorTranslate(998);
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
      case 409: {

        return 'Użytkownik z taką nazwą istnieje';
          break;
        }
      case 998: {

        return 'Hasła nie są identyczne';
          break;
      }
     default: {
        return 'Coś poszło nie tak';
      }
    }
  }

  ngOnInit(): void
  {
    if(!TokenService.tokenChecked)
    {
      this.router.navigateByUrl('/Loading')
    }
    else if(UserService.IsLoggin)
    this.router.navigateByUrl('')
  }

}
