import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './layouts/full/full.component';

import { FlexyModule } from './shared/flexy.module';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { TaskboardComponent } from './pages/taskboard/taskboard.component';
import { FilterByStatusPipe } from './pages/taskboard/filter-by-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    CalendarComponent,
    EmployeeListComponent,
    TaskboardComponent,
    FilterByStatusPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    FlexyModule,
    FormsModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
