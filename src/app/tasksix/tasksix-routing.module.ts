import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingtaskComponent } from './scrollingtask/scrollingtask.component';

const routes: Routes = [
  { path: '', component: ScrollingtaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksixRoutingModule { }
