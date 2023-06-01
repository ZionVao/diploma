import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { TaskboardComponent } from './pages/taskboard/taskboard.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
