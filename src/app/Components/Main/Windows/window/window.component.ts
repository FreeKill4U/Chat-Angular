import { WindowService } from '../../../../Services/window.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  Window = 0;

  constructor(private windowService: WindowService) { }

  ngOnInit(): void
  {
    this.windowService.CallToOpenWindowCalled$.subscribe((r: number) =>
    {
      this.Window = r;
      setTimeout(()=> {WindowService.Window = r;}, 0)
    })
  }

}
