import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hero-child-component',
  templateUrl: './hero-child-component.component.html',
  styleUrls: ['./hero-child-component.component.css']
})
export class HeroChildComponentComponent implements OnInit {
	@Input() count: number;
  @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
  }

}
