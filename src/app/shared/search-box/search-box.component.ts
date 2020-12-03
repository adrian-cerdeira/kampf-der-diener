import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Input() searchTerm: any;
  @Input() placeholder = 'Suchen ...';
  @ViewChild('searchElement') searchElement: any;
  @Output() searchChanged = new EventEmitter();
  searchControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.searchControl.setValue(this.searchTerm || '');
    this.searchControl.valueChanges.pipe(
      // wait 500ms after last change
      // debounceTime(500), // nötig für online-abfragen, dann müsste man noch den switchMap (im HttpService) hinzufügen
      // check if new value differs from old one
      distinctUntilChanged(),
    ).subscribe(term => this.searchChanged.emit(term));
  }

  // TODO AC:
  // clear(): void {
  //   this.searchControl.patchValue(null);
  // }

}
