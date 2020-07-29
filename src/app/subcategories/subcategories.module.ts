import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';
import { SelectServiceModule } from '../layout/select-service/select-service.module';





@NgModule({ 
  declarations: [SubcategoriesComponent],
  imports: [
    CommonModule,
    UiImportsModule,
    SelectServiceModule,    
  ],
  exports: [SubcategoriesComponent ]
})
export class SubcategoriesModule { }
