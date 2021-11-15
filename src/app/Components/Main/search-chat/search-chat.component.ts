import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-chat',
  templateUrl: './search-chat.component.html',
  styleUrls: ['./search-chat.component.css']
})
export class SearchChatComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @ViewChild('search')searchText: ElementRef;
  constructor() { }

  public Send(event: KeyboardEvent): void
  {
    if (/[a-z0-9]/i.test(event.key) && event.key.length == 1)
    {
      setTimeout(()=>
      {
        this.search.emit(this.searchText.nativeElement.value);
      }, 0);
    }
  }

  SendBackspace()
  {
    setTimeout(()=>
    {
      this.search.emit(this.searchText.nativeElement.value);
    }, 0);
  }

  ngOnInit(): void {
  }

}
