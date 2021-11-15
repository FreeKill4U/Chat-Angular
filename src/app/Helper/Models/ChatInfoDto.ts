export interface IChatInfoDto
{
  id: number;
  name: string;
  lastMessage: string;
  icon: number;
  color: string;
}

export class ChatInfoDto implements IChatInfoDto
{
  icon=1;
  color='#3ad192';
  name: string;
  lastMessage: string;
  id: number;
}
