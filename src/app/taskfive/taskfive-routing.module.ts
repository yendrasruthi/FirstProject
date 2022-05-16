import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabletaskComponent } from './tabletask/tabletask.component';

const routes: Routes = [
  { path: '', component: TabletaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskfiveRoutingModule { }
