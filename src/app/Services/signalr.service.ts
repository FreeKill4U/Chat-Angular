import { IMessageDto } from './../Helper/Models/MessageDto';
import { AddUserDto } from './../Helper/Models/AddUserDto';
import { UserService } from 'src/app/Services/user.service';
import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { ISendMessageDto, SendMessageDto } from '../Helper/Models/SendMessageDto';
import { TokenService } from './token.service';
import { Subject } from 'rxjs';
import { ChatService } from './chat.service';

@Injectable({
  providedIn: 'root'
})
export class SignalrService
{
  connection: signalR.HubConnection;
  root = UserService.Id+'notify';

  constructor(private tokenService: TokenService){}

  async Connect()
  {
    try
    {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl(this.root, {
            accessTokenFactory: () => this.tokenService.GetToken()
        })
        .build();


      await this.connection.start()
      .then(
        function () {
          console.log('Połączenie nawiązane poprawnie');
        })
        .catch(
          function (err: { toString: () => any; })
          {
            return console.warn(err.toString());
          });

      this.AddToGroup()


      this.connection.on("ReceiveMessage", (message: IMessageDto) =>
      {
        this.CallToGetNewMessage(message);
      });

      this.connection.on("Send", (chat: any) => {
        this.CallToGetNewMessage(chat);
      });
    }
    catch(e: any)
    {
      console.log(e);
    }
  }

  SendMessage(message: string)
  {
    let model: ISendMessageDto;
    model = new SendMessageDto(message);
    this.connection.invoke("SendMessage", model, ChatService.chatId).catch(function (err: { toString: () => any; }) {
      return console.error(err.toString());
    });
  }

  AddToGroup(): any
  {
    this.connection.invoke("AddToGroup").catch(function (err: { toString: () => any; }) {
      return console.error(err.toString());
    });
  }

  private CallToGetNewMessageSource = new Subject<any>();
  CallToGetNewMessageCalled$ = this.CallToGetNewMessageSource.asObservable();
  CallToGetNewMessage(message: IMessageDto): any
  {
    this.CallToGetNewMessageSource.next(message);
  }
}

