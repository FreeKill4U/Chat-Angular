import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  switcher = true;
  placeholder = '+';
  info = '';
  @ViewChild('search') searchElement: ElementRef;
  @ViewChild('inputBox') input: ElementRef;

  constructor(private chatService: ChatService, private renderer: Renderer2) { }

  AddUser(nick: string)
  {
    this.chatService.AddUser(nick)
    .subscribe(r =>
    {
      this.chatService.CallToChangeChat();
    },
    err =>
    {
      this.chatService.CallToChangeChat();
      this.info = this.ErrorTranslate(err.status);
    });
  }

  ErrorTranslate(code: number): string
  {
    switch(code)
    {
      case 0: {

        return 'Przepraszamy serwer nie działa';
        break;
      }
      case 400: {

      return 'Użytkownik nie istnieje!';
        break;
      }
      case 200: {

        this.OutFocus();
        return '';
        break;
        }
     default: {
        return 'Coś poszło nie tak';
      }
    }
  }

  OnFocus()
  {
    this.switcher = false;
    this.placeholder = '';

    this.renderer.removeClass(this.input.nativeElement, 'col-3');
    this.renderer.addClass(this.input.nativeElement, 'col-9');


    this.renderer.removeClass(this.searchElement.nativeElement, 'userNick-off');
    this.renderer.addClass(this.searchElement.nativeElement, 'userNick-on');
  }

  OutFocus()
  {
    this.switcher = true;
    this.placeholder = '+';
    this.searchElement.nativeElement.value = '';
    this.info = '';

    this.renderer.removeClass(this.input.nativeElement, 'col-9');
    this.renderer.addClass(this.input.nativeElement, 'col-3');


    this.renderer.removeClass(this.searchElement.nativeElement, 'userNick-on');
    this.renderer.addClass(this.searchElement.nativeElement, 'userNick-off');
  }

  Switch()
  {
    //this.switcher = !this.switcher;
    //setTimeout(()=>{
      //this.searchElement.nativeElement.focus();
    //},0);
  }

  ngOnInit(): void {
  }

}
