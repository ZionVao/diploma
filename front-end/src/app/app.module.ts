import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { WorkerDaysOffComponent } from './pages/worker-days-off/worker-days-off.component';
import { FilterMonthPipe } from './pages/worker-days-off/filter-month.pipe';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { GoalSettingComponent } from './pages/goal-setting/goal-setting.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { LeaveListComponent } from './pages/leave/leave-list/leave-list.component';
import { MyLeaveComponent } from './pages/leave/my-leave/my-leave.component';
import { ApplyLeaveComponent } from './pages/leave/apply-leave/apply-leave.component';
import { AssignLeaveComponent } from './pages/leave/assign-leave/assign-leave.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { MyTimesheetComponent } from './pages/timesheet/my-timesheet/my-timesheet.component';
import { EmployeeTimesheetsComponent } from './pages/timesheet/employee-timesheets/employee-timesheets.component';
import { EmployeeAttendanceComponent } from './pages/timesheet/employee-attendance/employee-attendance.component';
import { MyAttendanceComponent } from './pages/timesheet/my-attendance/my-attendance.component';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { fakeBackendProvider } from './shared/helpers/fake-backend';
import { JwtInterceptor } from './shared/helpers/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    CalendarComponent,
    EmployeeListComponent,
    TaskboardComponent,
    FilterByStatusPipe,
    WorkerDaysOffComponent,
    FilterMonthPipe,
    GoalSettingComponent,
    RecruitmentComponent,
    ProfileComponent,
    LeaveComponent,
    LeaveListComponent,
    MyLeaveComponent,
    ApplyLeaveComponent,
    AssignLeaveComponent,
    TimesheetComponent,
    MyTimesheetComponent,
    EmployeeTimesheetsComponent,
    EmployeeAttendanceComponent,
    MyAttendanceComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    FlexyModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
