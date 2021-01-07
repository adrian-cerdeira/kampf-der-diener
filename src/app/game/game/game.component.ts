import { Component, OnInit } from '@angular/core';

import { UpdateService } from '../../shared/update.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private updateService: UpdateService,
  ) {
    this.updateService.checkUpdate();
  }

  ngOnInit(): void {
  }

}
