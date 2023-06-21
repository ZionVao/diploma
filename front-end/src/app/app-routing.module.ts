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
import { SettingsComponent } from './pages/settings/settings.component';
import { CompanyComponent } from './pages/company/company.component';
import { UserListComponent } from './pages/company/user-list/user-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { JobTitlesComponent } from './pages/company/job-titles/job-titles.component';
import { EmploymentStatusComponent } from './pages/company/employment-status/employment-status.component';
import { ShiftsComponent } from './pages/company/shifts/shifts.component';
import { OrganizationStructureComponent } from './pages/company/organization-structure/organization-structure.component';
import { EmployeeAttendanceCalendarComponent } from './pages/employee-attendance-calendar/employee-attendance-calendar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
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
      // {
      //   path: 'todo',
      //   component: TaskboardComponent,
      //   data: { roles: [Role.Admin, Role.Manager, Role.User] },
      // },
      {
        path: 'vacations-and-leaves',
        component: EmployeeAttendanceCalendarComponent,
        data: { roles: [Role.Admin, Role.User, Role.Manager] },
      },
      // {
      //   path: 'okr',
      //   component: GoalSettingComponent,
      //   data: { roles: [Role.Admin, Role.User] },
      // },
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
          { path: '**', redirectTo: 'vacancies' },
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
          { path: '**', redirectTo: 'apply' },
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
          { path: '**', redirectTo: 'my-attendance' },
        ],
      },
      {
        path: 'company',
        component: CompanyComponent,
        children: [
          {
            path: 'user-management',
            component: UserListComponent,
            data: { roles: [Role.Manager, Role.Admin] },
          },
          { path: 'job', component: JobTitlesComponent },
          { path: 'employment-status', component: EmploymentStatusComponent },
          { path: 'work-shifts', component: ShiftsComponent },
          {
            path: 'organization-structure',
            component: OrganizationStructureComponent,
          },
          { path: '**', redirectTo: 'user-management' },
        ],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        data: { roles: [Role.Admin, Role.Manager] },
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
