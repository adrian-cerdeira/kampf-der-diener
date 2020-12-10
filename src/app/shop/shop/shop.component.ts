import { Component, OnInit } from '@angular/core';

import { UpdateService } from '../../shared/update.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    private updateService: UpdateService,
  ) {
    this.updateService.checkUpdate();
  }

  ngOnInit(): void {
  }

}
