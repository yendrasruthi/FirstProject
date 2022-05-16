import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskfiveRoutingModule } from './taskfive-routing.module';
import { TabletaskComponent } from './tabletask/tabletask.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    TabletaskComponent
  ],
  imports: [
    CommonModule,
    TaskfiveRoutingModule, MatSortModule
  ]
})
export class TaskfiveModule { }
