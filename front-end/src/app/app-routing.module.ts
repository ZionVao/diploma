import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { TaskboardComponent } from './pages/taskboard/taskboard.component';
import { WorkerDaysOffComponent } from './pages/worker-days-off/worker-days-off.component';
import { GoalSettingComponent } from './pages/goal-setting/goal-setting.component';
import { RecruitmentComponent } from './pages/recruitment/recruitment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { LeaveListComponent } from './pages/leave/leave-list/leave-list.component';
import { ApplyLeaveComponent } from './pages/leave/apply-leave/apply-leave.component';
import { AssignLeaveComponent } from './pages/leave/assign-leave/assign-leave.component';
import { MyLeaveComponent } from './pages/leave/my-leave/my-leave.component';
import { TimesheetComponent } from './pages/timesheet/timesheet.component';
import { MyTimesheetComponent } from './pages/timesheet/my-timesheet/my-timesheet.component';
import { EmployeeTimesheetsComponent } from './pages/timesheet/employee-timesheets/employee-timesheets.component';
import { EmployeeAttendanceComponent } from './pages/timesheet/employee-attendance/employee-attendance.component';
import { MyAttendanceComponent } from './pages/timesheet/my-attendance/my-attendance.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { Role } from './shared/models/role';
import { VacanciesListComponent } from './pages/recruitment/vacancies-list/vacancies-list.component';
import { CandidatesListComponent } from './pages/recruitment/candidates-list/candidates-list.component';
import { EditVacancyComponent } from './pages/recruitment/edit-vacancy/edit-vacancy.component';
import { AddVacancyComponent } from './pages/recruitment/add-vacancy/add-vacancy.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'calendar',
        component: CalendarComponent,
        data: { roles: [Role.Admin, Role.User, Role.Manager] },
      },
      {
        path: 'employees',
        component: EmployeeListComponent,
        data: { roles: [Role.Admin, Role.User, Role.Manager] },
      },
      {
        path: 'todo',
        component: TaskboardComponent,
        data: { roles: [Role.Admin, Role.Manager, Role.User] },
      },
      {
        path: 'vacations-and-requests',
        component: WorkerDaysOffComponent,
        data: { roles: [Role.Admin, Role.User, Role.Manager] },
      },
      {
        path: 'okr',
        component: GoalSettingComponent,
        data: { roles: [Role.Admin, Role.User] },
      },
      {
        path: 'recruitment',
        component: RecruitmentComponent,
        data: { roles: [Role.Admin, Role.Manager] },
        children: [
          {
            path: 'vacancies',
            component: VacanciesListComponent,
          },
          {
            path: 'add-vacancy',
            component: AddVacancyComponent,
          },
          { path: 'edit-vacancy/:id', component: EditVacancyComponent },

          { path: 'candidates', component: CandidatesListComponent },
        ],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { roles: [Role.User, Role.Manager] },
      },
      {
        path: 'leave',
        component: LeaveComponent,
        children: [
          {
            path: 'apply',
            component: ApplyLeaveComponent,
            data: { roles: [Role.Manager, Role.User] },
          },
          {
            path: 'my-leave',
            component: MyLeaveComponent,
            data: { roles: [Role.Manager, Role.User] },
          },
          {
            path: 'leave-list',
            component: LeaveListComponent,
            data: { roles: [Role.Admin, Role.Manager] },
          },
          {
            path: 'assign-leave',
            component: AssignLeaveComponent,
            data: { roles: [Role.Admin, Role.Manager] },
          },
        ],
      },
      {
        path: 'time-tracking',
        component: TimesheetComponent,
        children: [
          {
            path: 'my-timesheet',
            component: MyTimesheetComponent,
            data: { roles: [Role.Manager, Role.User] },
          },
          {
            path: 'employee-timesheets',
            component: EmployeeTimesheetsComponent,
            data: { roles: [Role.Manager, Role.Admin] },
          },
          {
            path: 'my-attendance',
            component: MyAttendanceComponent,
            data: { roles: [Role.Manager, Role.User] },
          },
          {
            path: 'employee-attendance',
            component: EmployeeAttendanceComponent,
            data: { roles: [Role.Manager, Role.Admin] },
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
