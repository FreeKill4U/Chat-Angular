import { IEditChatDto } from './../Helper/Models/EditChatDto';
import { IUserInfoDto } from './../Helper/Models/UserInfoDto';
import { UserService } from 'src/app/Services/user.service';
import { ISendMessageDto, SendMessageDto } from './../Helper/Models/SendMessageDto';
import { AddUserDto, IAddUserDto } from './../Helper/Models/AddUserDto';
import { IMessageDto } from './../Helper/Models/MessageDto';
import { Observable, Subject } from 'rxjs';
import { ChatInfoDto, IChatInfoDto } from './../Helper/Models/ChatInfoDto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewChatDto, NewChatDto } from '../Helper/Models/NewChatDto';

@Injectable({
  providedIn: 'root'
})
export class ChatService
{

  public static chatId: number;
  public static chat: ChatInfoDto;

  root = 'http://217.96.199.163:4000/Chat/';
  constructor(private http: HttpClient) { }

  GetChatId()
  {
    console.warn(ChatService.chatId)
  }

  GetChats(): Observable<Array<IChatInfoDto>>
  {
    let res = this.http.get<Array<IChatInfoDto>>(this.root+'GetMyChats');
    res.subscribe(
      r =>
      {
        if(r.length > 0)
        {
          if(ChatService.chatId == null)
          {
            ChatService.chatId = r[0].id;
            ChatService.chat = r[0];
          }
          else
          {
            let result = r.find(r => r.id == ChatService.chatId);
            if(result != undefined)
              ChatService.chat = result;
          }
          this.CallToGetMessages()
          this.CallToChangeChat()
          //console.warn("chatId: "+ChatService.chatId);
        }
      }
    )
    return res;
  }

  GetMessages(part: number): Observable<Array<IMessageDto>>
  {
    let res = this.http.post<Array<IMessageDto>>(this.root+'ShowChat/'+ChatService.chatId+"?part="+part, null);

    return res;
  }

  Send(message: string)
  {
    console.log(ChatService.chatId);
    let model: ISendMessageDto;
    model = new SendMessageDto(message);
    this.http.post(this.root+'Send/'+ChatService.chatId, model)
    .subscribe(r =>
      {
        console.log('ok')
      },
      err =>
      {
        console.error(err)
      }
      );
  }

  CreateChat(model: INewChatDto)
  {

    this.http.post<Array<IMessageDto>>(this.root+'CreateChat', model)
    .subscribe(r =>
      {
        window.location.reload();
      },
      err =>
      {
        console.error(err)
      }
      );
  }

  AddUser(nick: string): Observable<any>
  {

    let model: IAddUserDto;
    model = new AddUserDto(ChatService.chatId, nick);
    let result = this.http.post(this.root+'AddUser', model)
    return result;
  }

  Leave()
  {
    this.http.post(this.root+'LeaveChat/'+ChatService.chatId, null)
    .subscribe(
      r =>
      {
        console.log(r);
        window.location.reload();
      },
      err =>
      {
        console.log(err);
        window.location.reload();
      })
  }

  GetUsers(): Observable<Array<IUserInfoDto>>
  {
    let result = this.http.get<Array<IUserInfoDto>>(this.root+'GetUsers/'+ChatService.chatId)
    
    return result;
  }

  EditChat(model: IEditChatDto)
  {

    this.http.post<Array<IEditChatDto>>(this.root+'EditChat', model)
    .subscribe(r =>
      {
        this.CallToUpdateChatsList();
      },
      err =>
      {
        console.error(err)
      }
      );
  }




  private GetMessagesSource = new Subject<any>();
  CallToGetMessagesCalled$ = this.GetMessagesSource.asObservable();
  CallToGetMessages() {
    this.GetMessagesSource.next();
  }

  private UpdateChatsListSource = new Subject<any>();
  CallToUpdateChatsListCalled$ = this.UpdateChatsListSource.asObservable();
  CallToUpdateChatsList() {
    this.UpdateChatsListSource.next();
  }


  private ChangeChatSource = new Subject<any>();
  CallToChangeChatCalled$ = this.ChangeChatSource.asObservable();
  CallToChangeChat() {
    this.ChangeChatSource.next();
  }

  private ScrollSource = new Subject<any>();
  CallToScrollCalled$ = this.ScrollSource.asObservable();
  CallToScrollChat() {
    this.ScrollSource.next();
  }

}
