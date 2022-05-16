import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskthreeRoutingModule } from './taskthree-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThreeComponent,
    FourComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TaskthreeRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class TaskthreeModule { }
