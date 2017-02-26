import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//import { InsultService } from './insult.service';
import { TheInsult } from './theinsult';

const INSULTS: TheInsult[] = [
  {id: 1, theInsult: 'Your mother was a hamster!'},
  {id: 2, theInsult: 'Your father smelled of elderberries!'}
]

@Component({
  selector: 'post-rekt',
  template: `
    <h1>scrub</h1>
    <p class="unInsults">
      <span>{{unInsult.theInsult}}</span>
    </p>
    <input></input>
    <button (click)="newInsult()">Get Insulted Again</button>
    <p></p>
    <h2>You have been insulted</h2>
  `
})
export class PostRekt /*implements OnInit*/ {
  unInsults=INSULTS;

  insultNumber: number = (1);

  newInsult() {
    this.unInsults.id;
  }

  /*
    <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
[unInsults]="id === insultNumber"

  insults: TheInsult[];
  selectedInsult: TheInsult;

  constructor(
    private router: Router,
    private insultService: InsultService) { }

  getInsult(): void {
    this.InsultService.getInsult().then(insults => this.insults = insults);
  }

  ngOnInit(): void {
    this.getInsult();
  }*/
  //@Input()
  //insult: InsultList;
}
