import { ChatService } from 'src/app/Services/chat.service';
import { ChatInfoDto, IChatInfoDto } from './../../../../Helper/Models/ChatInfoDto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-options',
  templateUrl: './chat-options.component.html',
  styleUrls: ['./chat-options.component.css']
})
export class ChatOptionsComponent implements OnInit {

  constructor(private chatService: ChatService)
  {
    this.Chat = new ChatInfoDto();
    this.Chat.name = '';
  }

  Chat: IChatInfoDto;

  ngOnInit(): void {
    this.chatService.CallToChangeChatCalled$.subscribe(() => {
      this.Chat = ChatService.chat;
    });
  }
}
