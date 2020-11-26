import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder = 'Suchen ...';

  constructor() { }

  ngOnInit(): void {
  }

}
