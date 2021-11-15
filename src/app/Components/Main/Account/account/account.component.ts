import { UserService } from 'src/app/Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  Nick = "";
  Color="";

  User = UserService.User;
  constructor() { }

  ngOnInit(): void
  {
    this.Nick = UserService.User.nick;
    this.Color = UserService.User.color;
  }

}
