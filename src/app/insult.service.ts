/*import { Injectable } from '@angular/core';

import { TheInsult } from './theinsult';
import { INSULTS } from './insultList';

@Injectable()
export class InsultService {


  getInsult(): Promise<TheInsult[]> {
  return Promise.resolve(INSULTS);
}

  getInsults(id: number): Promise<TheInsult> {
    return this.getInsult()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

}
*/
