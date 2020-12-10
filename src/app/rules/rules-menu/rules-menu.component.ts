import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rules-menu',
  templateUrl: './rules-menu.component.html',
  styleUrls: ['./rules-menu.component.scss']
})
export class RulesMenuComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigateToAnchor(fragment: string): void {
    this.router.navigate(['/rules'], { fragment });
  }

}
