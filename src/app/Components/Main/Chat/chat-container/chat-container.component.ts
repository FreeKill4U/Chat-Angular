import { IMessageDto } from './../../../../Helper/Models/MessageDto';
import { AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import { SignalrService } from 'src/app/Services/signalr.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit{

  messArray: Array<IMessageDto>;

  @ViewChild('commentEl') comment: ElementRef;
  scroll: number;


  constructor(private chatService: ChatService, private signalrService: SignalrService) {
    this.messArray = new Array<IMessageDto>();
  }

  Scroll() {
    try {
      this.comment.nativeElement.scrollTop = this.comment.nativeElement.scrollHeight;
    } catch (err) { }
  }

  GetMessages() {
    this.chatService
      .GetMessages(1)
      .subscribe(
        r =>
        {
          this.messArray = r;

          setTimeout(()=>
          {
            this.Scroll();
          }, 0)
        },
        err =>
        {
          console.warn("chatId: "+ChatService.chatId);
        }
      )
  }

  ngOnInit(): void {


    this.chatService.CallToGetMessagesCalled$.subscribe(() => {
      this.GetMessages();
    });

    this.signalrService.CallToGetNewMessageCalled$.subscribe((message: IMessageDto) => {

      if(ChatService.chatId == message.chatId)
        this.messArray.push(message);
    });

    this.chatService.CallToScrollCalled$.subscribe(() => {

      this.Scroll();
    });

  }
}
