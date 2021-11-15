export interface IAddUserDto
{
  ChatId: number;
  UserNick: string;
}

export class AddUserDto implements IAddUserDto
{
  ChatId: number;
  UserNick: string;

  constructor(ChatId: number, UserNick: string)
  {
    this.ChatId = ChatId;
    this.UserNick = UserNick;
  }
}
