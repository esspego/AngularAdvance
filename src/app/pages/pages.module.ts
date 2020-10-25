/* Basic modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
/* Routing Module */
import { DashboardRoutingModule } from './dashboard-routing.module';
/* Father components */
import { PagesComponent } from './pages.component';
/* Pages components */
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';
/* Components shared */
import { SharedModule } from '../shared/shared.module';

/* temporal */
import { HandlerProgressBarComponent } from '../components/handler-progress-bar/handler-progress-bar.component';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    HandlerProgressBarComponent,
    GraphicDoughnutComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule {}
