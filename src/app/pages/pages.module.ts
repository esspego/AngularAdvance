
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';

/* temporal */
import { HandlerProgressBarComponent } from '../components/handler-progress-bar/handler-progress-bar.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    HandlerProgressBarComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    FormsModule
  ]
})
export class PagesModule {}
