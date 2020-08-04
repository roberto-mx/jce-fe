import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UiImportsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
