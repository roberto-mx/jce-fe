import { SelectedProviderComponent } from './selected-provider/selected-provider.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderlistComponent } from './provider-list/provider-list.component';

const routes: Routes = [
	{
		path: ':id',
		component: SelectedProviderComponent
	},
	{
		path: 'skill/:id',
		component: ProviderlistComponent
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
