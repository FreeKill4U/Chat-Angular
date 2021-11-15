import { WindowService } from './../../../../Services/window.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private windowService: WindowService) { }

  Switch()
  {
    this.windowService.OpenWindow(2);
  }

  ngOnInit(): void {
  }

}
