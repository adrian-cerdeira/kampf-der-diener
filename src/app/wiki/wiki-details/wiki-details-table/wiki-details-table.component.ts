import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-details-table',
  templateUrl: './wiki-details-table.component.html',
  styleUrls: ['./wiki-details-table.component.scss']
})
export class WikiDetailsTableComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
