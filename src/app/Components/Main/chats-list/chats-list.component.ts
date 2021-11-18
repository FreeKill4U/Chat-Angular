import { SignalrService } from './../../../Services/signalr.service';
import { IUserDto } from './../../../Helper/Models/UserDto';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IChatInfoDto } from 'src/app/Helper/Models/ChatInfoDto';
import { ChatService } from 'src/app/Services/chat.service';
import { IMessageDto } from 'src/app/Helper/Models/MessageDto';

@Component({
  selector: 'app-chats-list',
  templateUrl: './chats-list.component.html',
  styleUrls: ['./chats-list.component.css']
})
export class ChatsListComponent implements OnInit
{

  Chats: Array<IChatInfoDto>
  ChatsShow: Array<IChatInfoDto>
  regular = new RegExp('', 'i')

  @Output()
  uploaded = new EventEmitter<number>();

  constructor(private chatService: ChatService, private signalrService: SignalrService)
  {
    this.Chats = new Array<IChatInfoDto>();
    this.ChatsShow = new Array<IChatInfoDto>();
  }

  ChatListUpdate()
  {
    this.chatService.GetChats().subscribe(r =>
      {
        this.Chats = r;
        this.Search('');
      });
  }

  ChangeChat(id: number, index: number)
  {
    ChatService.chat = this.Chats[index];
    this.uploaded.emit(id);
  }

  Search(event: any)
  {
    this.regular = new RegExp(event, 'i');
      this.ChatsShow = this.Chats.filter(r => this.regular.test(r.name));
  }

  ngOnInit(): void
  {
    this.ChatListUpdate();
    this.signalrService.CallToGetNewMessageCalled$.subscribe((message: IMessageDto) =>
    {
      this.ChatListUpdate();
    });

    this.chatService.CallToUpdateChatsListCalled$.subscribe(() =>
    {
      this.ChatListUpdate();
    });
  }
}
