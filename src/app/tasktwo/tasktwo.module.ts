import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasktwoRoutingModule } from './tasktwo-routing.module';
import { TasktwoComponent } from './tasktwo/tasktwo.component';


@NgModule({
  declarations: [
    TasktwoComponent
  ],
  imports: [
    CommonModule,
    TasktwoRoutingModule
  ]
})
export class TasktwoModule { }
