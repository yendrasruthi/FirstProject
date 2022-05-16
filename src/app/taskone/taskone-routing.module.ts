import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskoneComponent } from './taskone/taskone.component';

const routes: Routes = [
  { path: "", component: TaskoneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskoneRoutingModule { }
