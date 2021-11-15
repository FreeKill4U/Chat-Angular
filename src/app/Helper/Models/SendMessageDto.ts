export interface ISendMessageDto
{
  Text: string;
}

export class SendMessageDto implements ISendMessageDto
{
  Text: string;
  constructor(Text: string)
  {
    this.Text = Text;
  }
}

