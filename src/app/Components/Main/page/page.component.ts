import { IChatInfoDto } from './../../../Helper/Models/ChatInfoDto';
import { TokenService } from './../../../Services/token.service';
import { SignalrService } from './../../../Services/signalr.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/Services/chat.service';
import { UserService } from 'src/app/Services/user.service';
import { ChatContainerComponent } from '../Chat/chat-container/chat-container.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit
 {

  @ViewChild(ChatContainerComponent) chat: any;


  constructor(private router: Router, private chatService: ChatService, private signalrService: SignalrService, private tokenService: TokenService) { }

  Chat: any;

  ChangeChat(event: any)
  {
    ChatService.chatId = event;
    this.chatService.CallToChangeChat()
    this.chat.GetMessages();
    //this.Chat = ChatService.chat;
    console.log(ChatService.chat);
  }

  ngOnInit(): void
  {
    if(!TokenService.tokenChecked)
    {
      this.router.navigateByUrl('/Loading')
    }
    else if(!UserService.IsLoggin)
    {
      this.router.navigateByUrl('/LoginPanel')
    }
    else this.signalrService.Connect();

    this.Chat = ChatService.chat;
  }
}
