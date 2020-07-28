import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserViewModule } from './user-view/user-view.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ApiModule,Configuration } from 'build/backend-api';
//import { SelectedProviderComponent } from './provider/selected-provider/selected-provider.component';




@NgModule({
  declarations: [
    AppComponent
    //,SelectedProviderComponent
  ],
  imports: [
    BrowserModule,
	  BrowserAnimationsModule,
    AppRoutingModule,
    UserViewModule,
    LayoutModule,
	  HttpClientModule,
	  ApiModule.forRoot(() => {
      return new Configuration({
        basePath: `http://127.0.0.1:4010`,
      });
    }),
	BrowserAnimationsModule,
	FlexLayoutModule
  ],
  exports: [
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
