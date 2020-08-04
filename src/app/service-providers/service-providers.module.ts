import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceProviderslistComponent } from './service-providerslist/service-providerslist.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';



@NgModule({
  declarations: [ServiceProviderslistComponent],
  imports: [
    CommonModule,
    UiImportsModule
  ],
  exports: [
    ServiceProviderslistComponent
  ]
})
export class ServiceProvidersModule { }
