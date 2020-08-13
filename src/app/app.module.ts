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

import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@NgModule({
  declarations: [
    AppComponent
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
        basePath: `https://jce-api.herokuapp.com`,
      });
    }),
	BrowserAnimationsModule,
  FlexLayoutModule,
  IonicModule.forRoot()
  ],
  exports: [
],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
