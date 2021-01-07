import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-details-info',
  templateUrl: './wiki-details-info.component.html',
  styleUrls: ['./wiki-details-info.component.scss']
})
export class WikiDetailsInfoComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
