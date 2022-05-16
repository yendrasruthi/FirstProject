import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasktwoComponent } from './tasktwo/tasktwo.component';

const routes: Routes = [
  { path: "", component: TasktwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasktwoRoutingModule { }
