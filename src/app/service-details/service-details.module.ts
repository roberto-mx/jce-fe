import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDetailsRoutingModule } from './service-details-routing.module';
import { ServiceDetailsComponent } from './service-details.component';

import { UiImportsModule } from '../ui-imports/ui-imports.module';

@NgModule({
  declarations: [ServiceDetailsComponent],
  imports: [
    CommonModule,
    ServiceDetailsRoutingModule,
    UiImportsModule
  ]
})
export class ServiceDetailsModule {
}
