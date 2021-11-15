import { SignalrService } from './../../../../../Services/signalr.service';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-message-text-area',
  templateUrl: './message-text-area.component.html',
  styleUrls: ['./message-text-area.component.css']
})
export class MessageTextAreaComponent implements OnInit
{
  clear="";
  constructor(private signalrService: SignalrService, private chatService: ChatService) { }

  Enter(key: KeyboardEvent, message: string)
  {
    if(key.code == 'Enter')
      this.Send(message)
  }


  Send(message: string)
  {
    if(message != '')
    {
      this.signalrService.SendMessage(message);
      this.chatService.Send(message);
      this.clear="";
    }
  }

  ngOnInit(): void {
  }

}
