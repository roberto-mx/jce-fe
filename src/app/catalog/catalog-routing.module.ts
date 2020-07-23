import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { SubcategoriesComponent } from '../subcategories/subcategories/subcategories.component';

const routes: Routes = [{ path: '', component: CatalogComponent },
{ path: '/subcategories', component: SubcategoriesComponent  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
