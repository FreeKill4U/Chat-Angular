import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ColorsService } from 'src/app/Services/colors.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  dropdown = false;
  colors = Array<string>();

  @Input()
  Color = "#3ad192";


  @ViewChild('colorBox') box: ElementRef;

  @Output() SetColor = new EventEmitter<string>();

  TryDropdown()
  {
    if(this.dropdown == true)
      this.Dropdown();
  }
  Dropdown()
  {
    setTimeout(() => {this.dropdown = !this.dropdown;}, 0)
  }

  Send(color: string)
  {
    this.Color = color;
    this.SetColor.emit(color);
  }

  Get(): string
  {
    return this.Color;
  }


  ngOnInit(): void
  {
    this.colors = ColorsService.colors;
  }

}
