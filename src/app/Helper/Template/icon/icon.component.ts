import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {


  @Input()
  Icon = 1;
  @Input()
  Color = '#3ad192';
  constructor() { }

  ngOnInit(): void {
  }

}
