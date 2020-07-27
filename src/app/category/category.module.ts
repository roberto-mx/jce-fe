import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCategorislistComponent } from './select-categorislist/select-categorislist.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';


@NgModule({
  declarations: [SelectCategorislistComponent],
  imports: [
    CommonModule,
    UiImportsModule
  ],
  exports: [
    SelectCategorislistComponent
  ]
})
export class CategoryModule { }
