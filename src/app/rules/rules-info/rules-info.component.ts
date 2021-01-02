import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules-info',
  templateUrl: './rules-info.component.html',
  styleUrls: ['./rules-info.component.scss']
})
export class RulesInfoComponent implements OnInit {
  @Input() page: any;

  constructor() { }

  ngOnInit(): void {
  }

}
