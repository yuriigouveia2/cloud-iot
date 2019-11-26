import { GraphComponent } from './pages/graph/graph.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent,
    GraphComponent
  ]
})
export class HomeModule { }
