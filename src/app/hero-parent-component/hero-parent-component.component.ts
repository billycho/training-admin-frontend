import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parent-component',
  templateUrl: './hero-parent-component.component.html',
  styleUrls: ['./hero-parent-component.component.css']
})
export class HeroParentComponentComponent implements OnInit {

  counts = 10;
  constructor() { }

  ngOnInit() {
  }

}
