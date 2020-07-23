import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { SubcategoriesModule } from '../subcategories/subcategories.module';

import { UiImportsModule } from '../ui-imports/ui-imports.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
	UiImportsModule,
	SubcategoriesModule
  ]
})
export class CatalogModule { }
