import { EditChatDto } from './../../../../Helper/Models/EditChatDto';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-chat-settings',
  templateUrl: './chat-settings.component.html',
  styleUrls: ['./chat-settings.component.css']
})
export class ChatSettingsComponent implements OnInit {

  dropdown = false;
  Chat = ChatService.chat;
  constructor(private chatService: ChatService) { }

  SetColor(color: string)
  {
    let model = new EditChatDto();
    model.Color = color;
    model.Id = this.Chat.id;

    this.chatService.EditChat(model);
  }

  SetIcon(icon: number)
  {
    let model = new EditChatDto();
    model.Icon = icon;
    model.Id = this.Chat.id;

    this.chatService.EditChat(model);
  }

  Dropdown()
  {
    this.dropdown = !this.dropdown;
  }
  ngOnInit(): void
  {
    this.chatService.CallToChangeChatCalled$.subscribe(r =>
      {
        this.Chat = ChatService.chat;
      })
  }

}
