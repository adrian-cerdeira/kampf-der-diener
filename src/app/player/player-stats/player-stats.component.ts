import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  @Input() player: any;
  @Output() drawed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  draw() {
    this.drawed.emit();
  }

}
