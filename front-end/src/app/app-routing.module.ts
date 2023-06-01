import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { TaskboardComponent } from './pages/taskboard/taskboard.component';
import { WorkerDaysOffComponent } from './pages/worker-days-off/worker-days-off.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
