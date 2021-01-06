import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tutorial-start-game',
  templateUrl: './tutorial-start-game.component.html',
  styleUrls: ['./tutorial-start-game.component.scss']
})
export class TutorialStartGameComponent implements OnInit {
  @Output() started = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.started.emit();
  }

}
