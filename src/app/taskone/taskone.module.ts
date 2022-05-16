import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskoneRoutingModule } from './taskone-routing.module';
import { TaskoneComponent } from './taskone/taskone.component';


@NgModule({
  declarations: [
    TaskoneComponent
  ],
  imports: [
    CommonModule,
    TaskoneRoutingModule
  ]
})
export class TaskoneModule { }
