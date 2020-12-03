import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details-table',
  templateUrl: './card-details-table.component.html',
  styleUrls: ['./card-details-table.component.scss']
})
export class CardDetailsTableComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
