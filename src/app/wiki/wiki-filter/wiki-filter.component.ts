import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wiki-filter',
  templateUrl: './wiki-filter.component.html',
  styleUrls: ['./wiki-filter.component.scss']
})
export class WikiFilterComponent implements OnInit {
  @Output() filteredByValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterByValue(selectOption: any, searchValue: any): void {
    this.filteredByValue.emit({
      selectOption,
      searchValue
    });
  }

}
