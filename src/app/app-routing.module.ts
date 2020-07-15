import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './user-view/user-create/user-create.component';
import { HomeComponent } from './homemodule/home/home.component';
import { SelectServiceComponent } from './layout/select-service/select-service.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user/add', component: UserCreateComponent},
  { path: 'get/services', component: SelectServiceComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
