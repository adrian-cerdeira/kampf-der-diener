import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rules-menu',
  templateUrl: './rules-menu.component.html',
  styleUrls: ['./rules-menu.component.scss']
})
export class RulesMenuComponent implements OnInit {
  @Output() showedPage = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showPage(name: string): void {
    this.showedPage.emit(name);
  }

}
