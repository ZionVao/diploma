import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RedirectGuard } from './shared/guards/redirect/redirect.guard';
import { SigninComponent } from './homepage/pages/signin/signin.component';
import { EmployeesComponent } from './homepage/pages/employees/employees.component';
import { EmployeeListComponent } from './homepage/pages/employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: 'company/employees', component: EmployeeListComponent },
      // { path: 'calendar', component: FullcalendarComponent },
    ],
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  providers: [RedirectGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
