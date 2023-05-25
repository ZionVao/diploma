import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TocComponent } from './components/toc/toc.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AlertComponent } from './components/alert/alert.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataPropertyGetterPipe } from './pipes/data-property-getter.pipe';

import { TablerIconsModule } from 'angular-tabler-icons';
import {
  IconSearch,
  IconHeart,
  IconBrandGithub,
} from 'angular-tabler-icons/icons';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

const icons = {
  IconSearch,
  IconHeart,
  IconBrandGithub,
};

@NgModule({
  imports: [
    CommonModule,
    TablerIconsModule.pick(icons),
    PerfectScrollbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  declarations: [
    TocComponent,
    AlertComponent,
    DataTableComponent,
    DataPropertyGetterPipe,
  ],
  exports: [
    TocComponent,
    AlertComponent,
    DataTableComponent,
    DataPropertyGetterPipe,
    TablerIconsModule,
  ],
})
export class SharedModule {}
