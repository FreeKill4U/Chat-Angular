import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-leave-chat',
  templateUrl: './leave-chat.component.html',
  styleUrls: ['./leave-chat.component.css']
})
export class LeaveChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  Leave()
  {
    this.chatService.Leave();
  }

  ngOnInit(): void {
  }

}
