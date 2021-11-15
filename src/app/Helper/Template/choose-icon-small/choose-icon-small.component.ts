import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColorsService } from 'src/app/Services/colors.service';

@Component({
  selector: 'app-choose-icon-small',
  templateUrl: './choose-icon-small.component.html',
  styleUrls: ['./choose-icon-small.component.css']
})
export class ChooseIconSmallComponent implements OnInit {

  icons = Array<number>()
  colors = Array<string>();

  @Input()
  MainIcon = 1;
  @Input()
  MainColor = '#3ad192';

  dropdown = false;
  dropdown2 = false;

  constructor() { }

  @Output() SetIcon = new EventEmitter<number>();

  Send()
  {
    this.SetIcon.emit(this.MainIcon);
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

  ngOnInit(): void
  {
    for(let i=1; i<=50; i++)
    {
      this.icons.push(i);
    }

    this.colors = ColorsService.colors;



  }

}
