import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskfourRoutingModule } from './taskfour-routing.module';
import { CountComponent } from './count/count.component';
import { TimerInputComponent } from './timer-input/timer-input.component';
import { TimerListComponent } from './timer-list/timer-list.component';
import { StartPauseCountComponent } from './start-pause-count/start-pause-count.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CountComponent,
    TimerInputComponent,
    TimerListComponent,
    StartPauseCountComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TaskfourRoutingModule
  ]
})
export class TaskfourModule { }
