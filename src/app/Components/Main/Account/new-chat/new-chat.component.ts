import { WindowService } from './../../../../Services/window.service';
import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  constructor(private chatService: ChatService, private windowService: WindowService) { }

  Switch()
  {
    this.windowService.OpenWindow(1);
  }

  ngOnInit(): void {
  }

}
