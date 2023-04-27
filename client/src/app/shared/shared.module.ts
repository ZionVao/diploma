import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TocComponent } from './components/toc/toc.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TocComponent, AlertComponent],
  exports: [TocComponent, AlertComponent],
})
export class SharedModule {}
