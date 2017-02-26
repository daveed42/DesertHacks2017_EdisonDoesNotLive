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
    <p></p>
      <h1>NERD</h1>
      <p></p>
      <h2>nerd</h2>
      <p></p>
      <h3>nErD</h3>
    <p></p>
    <button (click)="newInsult()">Get Insulted Again</button>
    <p></p>
    <h2>You have been insulted</h2>
  `
})
export class PostRekt /*implements OnInit*/ {
  unInsults=INSULTS;

//  insultNumber: number = (1);

  //newInsult(submit:number) {
    //this.unInsults[1].id=submit;
    //this.unInsults.id;
  //}

  /*
  <input type="text" value="submit"><br>

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
