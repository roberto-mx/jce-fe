import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';




@NgModule({
  declarations: [SubcategoriesComponent],
  imports: [
    CommonModule,
    UiImportsModule
  ],
  exports: [SubcategoriesComponent]
})
export class SubcategoriesModule { }
