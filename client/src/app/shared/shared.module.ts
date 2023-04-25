import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TocComponent } from './components/toc/toc.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [CommonModule],
  declarations: [TocComponent],
  exports: [TocComponent],
})
export class SharedModule {}
