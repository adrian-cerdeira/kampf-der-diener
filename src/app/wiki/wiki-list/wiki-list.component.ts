import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-list',
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.scss']
})
export class WikiListComponent implements OnInit {
  @Input() cards: any;

  constructor() { }

  ngOnInit(): void {
  }

}
