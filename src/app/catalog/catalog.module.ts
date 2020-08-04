import { JobModule } from './../job/job.module';
import { CategoryModule } from './../category/category.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';

import { UiImportsModule } from '../ui-imports/ui-imports.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    UiImportsModule,
    CategoryModule
  ]
})
export class CatalogModule { }
