import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tutorial-dialogs',
  templateUrl: './tutorial-dialogs.component.html',
  styleUrls: ['./tutorial-dialogs.component.scss']
})
export class TutorialDialogsComponent implements OnInit {
  @Input() modal: any;
  @Output() showed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.showed.emit(this.modal.index + 1);
  }

  last() {
    this.showed.emit(this.modal.index - 1);
  }

}
