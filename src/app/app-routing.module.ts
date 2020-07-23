import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-view/user-view.module').then(m => m.UserViewModule)
  },
  /*{
	path : 'subcategories',
	loadChildren: () => import('./subcategories/subcategories.module').then(m => m.SubcategoriesModule)
  }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
