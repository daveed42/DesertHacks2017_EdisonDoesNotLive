import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

//import { InsultService } from './insult.service';
//import { TheInsult } from './theinsult';

var insults:string[]=['Your mother was a hamster!',
'Your father smelled of elderberries!',
'Are you sure the nurses know you are using the computer?',
'Does the zoo know that you and the other baboons got loose?',
'Santa Claus refuses to let your kids sit in his lap.',
'You play baseball like a girl!',
'Yo mamma so fat, she wore a X t-shirt, and a helicopter landed on her',
'Yo mamma so stupid, she thinks hamburger helper comes with another person',
'Yo momma head so big it shows up on radar.',
'Yo momma so fat God couldnt light Earth till she moved!',
'Yo momma so fat NASA has to orbit a satellite around her!',
'Yo momma so fat she fell in love and broke it!',
'Yo momma so fat she jumped in the air and got stuck.',
'Yo momma so fat the highway patrol made her wear "Caution! Wide Turn"!',
'Yo momma so old her social security number is 1!',
'Youre so fat, when you were in school you sat next to EVERYONE!',
'Youre so fat, you have to iron your pants in the driveway!',
'Your Christmas tree is still up in February.',
'Youre NUMBER ONE in my book.  My book is called "Creeps I Have Known".',

];

@Component({
  selector: 'post-rekt',
  template: `
    <h1>scrub</h1>
    <p></p>
      <h1>NERD</h1>
      <p></p>
      <h2>{{dumbInsult}}</h2>
      <p></p>
      <h3>nErD</h3>
    <p></p>
    <button (click)="newInsult()">Get Insulted Again</button>
    <p></p>
    <h2>You have been insulted</h2>
  `
})
export class PostRekt /*implements OnInit*/ {
  //unInsults=INSULTS;
  insultNumber: number = 0;
  dumbInsult: string=insults[this.insultNumber];

  newInsult() {
    this.insultNumber=this.insultNumber+1;
    this.dumbInsult=insults[this.insultNumber]

    //this.unInsults[1].id=submit;
    //this.unInsults.id;
  }

  /*
  { 'Your mother was a hamster!'},
  { 'Your father smelled of elderberries!'}

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
