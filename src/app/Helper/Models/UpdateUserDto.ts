export interface IUpdateUserDto
{
  Nick: string;
  Color: string;
  Icon: number;
  IconColor: string;
}

export class UpdateUserDto implements IUpdateUserDto
{
  Nick: string;
  Color: string;
  Icon: number;
  IconColor: string;
}

