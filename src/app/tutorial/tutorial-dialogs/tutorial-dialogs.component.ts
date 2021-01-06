import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-dialogs',
  templateUrl: './tutorial-dialogs.component.html',
  styleUrls: ['./tutorial-dialogs.component.scss']
})
export class TutorialDialogsComponent implements OnInit {
  @Input() modal: any;

  constructor() { }

  ngOnInit(): void {
  }

}
