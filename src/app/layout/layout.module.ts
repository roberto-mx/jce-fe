import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
 	MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports: [HeaderComponent, ContentComponent, FooterComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule]
})
export class LayoutModule { }
