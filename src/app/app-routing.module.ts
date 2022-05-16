import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'taskOne', loadChildren: () => import('./taskone/taskone.module').then(m => m.TaskoneModule) },
  { path: 'taskTwo', loadChildren: () => import('./tasktwo/tasktwo.module').then(m => m.TasktwoModule) },
  { path: 'taskThree', loadChildren: () => import('./taskthree/taskthree.module').then(m => m.TaskthreeModule) },
  { path: 'taskFour', loadChildren: () => import('./taskfour/taskfour.module').then(m => m.TaskfourModule) },
  { path: 'taskFive', loadChildren: () => import('./taskfive/taskfive.module').then(m => m.TaskfiveModule) },
  { path: 'taskSix', loadChildren: () => import('./tasksix/tasksix.module').then(m => m.TasksixModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
