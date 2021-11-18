export interface IUserDto
{
  [x: string]: any;
  id?: number;
  nick: string;
  token: string;
  color: string;
  icon: number;
  iconColor: string;
}

export class UserDto implements IUserDto
{
  icon: number;
  iconColor: string;
  color: string;
  [x: string]: any;
  id?: number | undefined;
  nick: string;
  token: string;
}
//Komentarz
