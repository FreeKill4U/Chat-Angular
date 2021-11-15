import { ChatService } from 'src/app/Services/chat.service';
import { UserService } from './../../../../Services/user.service';
import { IMessageDto, MessageDto } from './../../../../Helper/Models/MessageDto';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent implements OnInit
{

  @Input()
  Message: IMessageDto;
  @Input()
  count: number;

  @ViewChild('date') el:ElementRef;

  author: any;

  constructor(private chatService: ChatService)
  {
    this.Message = new MessageDto();
  }

  Enter()
  {
    this.el.nativeElement.setAttribute('style', 'opacity: 0.6;');
  }
  Leave()
  {
    this.el.nativeElement.setAttribute('style', 'transition: all 150ms ease-in-out;opacity: 0;');
  }

  ngOnInit(): void {

    this.author = UserService.User.nick;
    this.chatService.CallToScrollChat();
  }

}
