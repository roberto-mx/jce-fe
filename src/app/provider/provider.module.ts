import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedProviderComponent } from './selected-provider/selected-provider.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';
import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderlistComponent } from './provider-list/provider-list.component';




@NgModule({
  declarations: [SelectedProviderComponent, ProviderlistComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    UiImportsModule,
     
  ]
})
export class ProviderModule { }
