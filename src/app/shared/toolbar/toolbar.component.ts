import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @ViewChild('luxbarCheckbox')
  checkbox!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.checkbox.nativeElement.checked = false;
  }

}
