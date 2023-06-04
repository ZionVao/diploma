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

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: 'calendar', component: CalendarComponent },
      {
        path: 'employees',
        component: EmployeeListComponent,
      },
      {
        path: 'todo',
        component: TaskboardComponent,
      },
      { path: 'vacations-and-requests', component: WorkerDaysOffComponent },
      { path: 'okr', component: GoalSettingComponent },
      { path: 'recruitment', component: RecruitmentComponent },
      { path: 'profile', component: ProfileComponent },
      {
        path: 'leave',
        component: LeaveComponent,
        children: [
          { path: 'apply', component: ApplyLeaveComponent },
          { path: 'my-leave', component: MyLeaveComponent },
          { path: 'leave-list', component: LeaveListComponent },
          { path: 'assign-leave', component: AssignLeaveComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
