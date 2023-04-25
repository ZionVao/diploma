import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RedirectGuard } from './shared/guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  preloadingStrategy: PreloadAllModules,})],
  providers: [RedirectGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
