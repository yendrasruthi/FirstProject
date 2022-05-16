import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksixRoutingModule } from './tasksix-routing.module';
import { ScrollingtaskComponent } from './scrollingtask/scrollingtask.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    ScrollingtaskComponent
  ],
  imports: [
    CommonModule,
    TasksixRoutingModule,
    ScrollingModule
  ]
})
export class TasksixModule { }
