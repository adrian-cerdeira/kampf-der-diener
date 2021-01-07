import { Component, Input, OnInit } from '@angular/core';
import { CardType } from '../card-type';

@Component({
  selector: 'app-card-type',
  templateUrl: './card-type.component.html',
  styleUrls: ['./card-type.component.scss']
})
export class CardTypeComponent implements OnInit {
  @Input() type: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  get isWildtier(): boolean { return this.type === CardType.Diener; }
  get isPartner(): boolean { return this.type === CardType.Partner; }
  get isZauber(): boolean { return this.type === CardType.Zauber; }
  get isSchildtraeger(): boolean { return this.type === CardType.Schildtraeger; }

}
