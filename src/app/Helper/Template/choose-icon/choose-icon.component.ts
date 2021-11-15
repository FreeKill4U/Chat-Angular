import { ColorsService } from './../../../Services/colors.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-icon',
  templateUrl: './choose-icon.component.html',
  styleUrls: ['./choose-icon.component.css']
})
export class ChooseIconComponent implements OnInit {

  icons = Array<number>()
  colors = Array<string>();

  @Input()
  MainIcon = 1;
  @Input()
  MainColor = '#3ad192';

  dropdown = false;
  dropdown2 = false;

  constructor() { }

  SendIcon(): number
  {
    return this.MainIcon;
  }

  SendColor(): string
  {
    return this.MainColor;
  }


  ChangeMainIcon(id: number)
  {
    this.MainIcon = id;
  }

  ChangeMainColor(color: string)
  {
    this.MainColor = color;
  }

  TryDropdown()
  {
    if(this.dropdown == true)
      this.Dropdown();
  }
  Dropdown()
  {
    setTimeout(() => {this.dropdown = !this.dropdown;}, 0)
  }

  TryDropdown2()
  {
    if(this.dropdown2 == true)
      this.Dropdown2();
  }
  Dropdown2()
  {
    setTimeout(() => {this.dropdown2 = !this.dropdown2;}, 0)
  }

  ngOnInit(): void
  {
    for(let i=1; i<=50; i++)
    {
      this.icons.push(i);
    }

    this.colors = ColorsService.colors;

  }

}
