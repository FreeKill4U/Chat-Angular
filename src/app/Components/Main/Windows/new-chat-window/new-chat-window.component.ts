import { ChatService } from 'src/app/Services/chat.service';
import { ChooseIconComponent } from './../../../../Helper/Template/choose-icon/choose-icon.component';
import { WindowService } from './../../../../Services/window.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { INewChatDto, NewChatDto } from 'src/app/Helper/Models/NewChatDto';

@Component({
  selector: 'app-new-chat-window',
  templateUrl: './new-chat-window.component.html',
  styleUrls: ['./new-chat-window.component.css']
})
export class NewChatWindowComponent implements OnInit {

  constructor(private windowService:WindowService, private chatService: ChatService) { }


  @ViewChild(ChooseIconComponent) icon:ChooseIconComponent;

  CreateChat(name: string)
  {
    let model: INewChatDto;
    model = new NewChatDto();
    model.name = name;
    model.icon = this.icon.SendIcon()
    model.color = this.icon.SendColor()

    this.chatService.CreateChat(model);
  }

  Exit()
  {
    if(WindowService.Window==1)
      this.windowService.OpenWindow(0);
  }

  ngOnInit(): void {
  }

}
