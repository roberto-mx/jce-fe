import { SkillModule } from './skill/skill.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-view/user-view.module').then(m => m.UserViewModule)
  },
  {
	  path : 'skill/:id',
	  loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
