import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserViewModule } from './user-view/user-view.module';
import { LayoutModule } from './layout/layout.module';
import { ApiModule, Configuration} from 'backend-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserViewModule,
    LayoutModule,
	HttpClientModule,
	ApiModule.forRoot(() => {
      return new Configuration({
        basePath: `http://127.0.0.1:4010`,
      });
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
