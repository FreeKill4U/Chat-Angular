import { ChatService } from 'src/app/Services/chat.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IUserInfoDto } from 'src/app/Helper/Models/UserInfoDto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users: Array<IUserInfoDto>;
  dropdown = false;
  constructor(private chatService: ChatService) { }

  Dropdown()
  {
    this.dropdown = !this.dropdown;
  }

  ngOnInit(): void {


    this.chatService.CallToChangeChatCalled$.subscribe(() =>
    {
      this.chatService.GetUsers().subscribe(
        r =>
        {
          this.Users = r;
        },
        err =>
        {
          console.log(err);
        }
      )
    });

  }

}
