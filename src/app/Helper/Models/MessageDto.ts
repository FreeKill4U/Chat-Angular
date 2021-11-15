export interface IMessageDto
{
  id?: number;
  text?: string;
  author?: string;
  colorAuth?: string;
  date?: Date;
  chatId?: number;
}

export class MessageDto implements IMessageDto
{ }

