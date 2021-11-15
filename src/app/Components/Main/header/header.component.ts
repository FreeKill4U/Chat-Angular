import { ChatInfoDto } from './../../../Helper/Models/ChatInfoDto';
import { IChatInfoDto } from 'src/app/Helper/Models/ChatInfoDto';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  chat: IChatInfoDto;
  hide = false;

  constructor(private router: Router, private userService: UserService, private chatService: ChatService)
  {
    this.chat = new ChatInfoDto();
    this.chat.name = '';
  }

  ngOnInit(): void {
    this.chatService.CallToChangeChatCalled$.subscribe(() => {
      this.chat = ChatService.chat;

      if(this.chat.id == undefined)
        this.hide = true;
      else
        this.hide = false;
    });
    if(this.chat.id == undefined)
      this.hide = true;
    console.log(this.chat.id)
  }


}
