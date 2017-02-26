import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreRekt }   from './prerekt.component';
//import { heroes details }      from './heroes-detail.component';
import { PostRekt }  from './postrekt.component';

const routes: Routes = [
  { path: '', redirectTo: '/pre-rekt', pathMatch: 'full' },
  { path: 'pre-rekt',  component: PreRekt },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'post-rekt',     component: PostRekt }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
