import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ComponentsSharedModule } from '../shared/components-shared/components-shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsSharedModule,
    FontAwesomeModule,
    NgOptimizedImage
  ]
})
export class DashboardModule { }
