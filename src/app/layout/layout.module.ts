import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { SelectServiceComponent } from './select-service/select-service.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent, SelectServiceComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, ContentComponent, FooterComponent]
})
export class LayoutModule { }
