import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero'
import { HEROES } from '../../heronames'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {
  herolist : Hero[] = HEROES;
  selectedhero : Hero;
  constructor() { }
  onselect(hero:Hero): void {
    this.selectedhero=hero;
  }
  ngOnInit(): void {
  }

}
