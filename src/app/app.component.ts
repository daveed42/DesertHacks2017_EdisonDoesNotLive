import { Component } from '@angular/core';

//import { InsultList } from './insultList';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    <nav>
      <a routerLink="/prerekt" routerLinkActive="active">Get Rekt?</a>
      <p></p>
      <a routerLink="/postrekt" routerLinkActive="active">Get Rekt.</a>
    </nav>

    <!--<h1>Git ur insults here!</h1>
    <h2>Click to get insulted lel.</h2>
    <button type="button" (click)="getInsulted(insult)">I wAnt TO gET REKT.</button>
    <router-outlet></router-outlet>-->
    `,
})
export class AppComponent  {
  title = 'Though Shalt Be Insulted';
  //selectedInsult: InsultList;


/*  getInsulted(insult: string) {
    insult = 'scrub';
    console.log(insult);
    this.selectedInsult = insult;
  }*/
}
