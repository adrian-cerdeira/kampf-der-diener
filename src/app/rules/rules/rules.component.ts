import { Component, OnInit } from '@angular/core';

import { UpdateService } from '../../shared/update.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  page = 'gameplay';

  constructor(
    private updateService: UpdateService,
  ) {
    this.updateService.checkUpdate();
  }

  ngOnInit(): void {
  }

  show(pageName: string): void {
    this.page = pageName;
  }

}
