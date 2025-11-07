import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Settings } from './settings/settings';
import { Base } from './base/base';

const routes: Routes = [
  { path: '', component: Base },
  { path: 'settings', component: Settings }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
