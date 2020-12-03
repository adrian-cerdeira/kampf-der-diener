import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-list-item',
  templateUrl: './wiki-list-item.component.html',
  styleUrls: ['./wiki-list-item.component.scss']
})
export class WikiListItemComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit(): void {
  }

}
