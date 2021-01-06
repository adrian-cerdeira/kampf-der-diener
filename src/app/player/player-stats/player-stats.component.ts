import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  @Input() player: any;

  constructor() { }

  ngOnInit(): void {
  }

}
