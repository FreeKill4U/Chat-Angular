export interface IEditChatDto
{
  Id: number;
  Name: string;
  Icon: number;
  Color: string;
}

export class EditChatDto implements IEditChatDto
{
  Id: number;
  Name: string;
  Icon: number;
  Color: string;
}

