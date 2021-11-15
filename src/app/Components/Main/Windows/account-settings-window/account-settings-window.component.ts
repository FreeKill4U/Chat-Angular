import { IconComponent } from './../../../../Helper/Template/icon/icon.component';
import { UpdateUserDto } from './../../../../Helper/Models/UpdateUserDto';
import { UserService } from 'src/app/Services/user.service';
import { WindowService } from './../../../../Services/window.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChooseIconComponent } from 'src/app/Helper/Template/choose-icon/choose-icon.component';

@Component({
  selector: 'app-account-settings-window',
  templateUrl: './account-settings-window.component.html',
  styleUrls: ['./account-settings-window.component.css']
})
export class AccountSettingsWindowComponent implements OnInit {

  constructor(private windowService: WindowService, private userService: UserService) { }


  User = UserService.User;

  Nick = UserService.User.nick;

  NickColor = UserService.User.color;

  @ViewChild('icon') icon: ChooseIconComponent;

  SetColor(color: string)
  {
      this.NickColor = color;
  }

  Exit()
  {
    if(WindowService.Window==2)
      this.windowService.OpenWindow(0);
  }

  Send(nick: string)
  {
    let model = new UpdateUserDto();
    model.Nick = nick;
    model.Color = this.NickColor;
    model.Icon = this.icon.SendIcon();
    model.IconColor = this.icon.SendColor();

    this.userService.Update(model).subscribe(
      r =>
      {
        window.location.reload(true);
      },
      err =>
      {
        console.log(err);
      })
  }


  ngOnInit(): void
  {

  }

}
