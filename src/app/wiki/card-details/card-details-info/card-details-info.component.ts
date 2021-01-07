import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-details-info',
  templateUrl: './card-details-info.component.html',
  styleUrls: ['./card-details-info.component.scss']
})
export class CardDetailsInfoComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
