import { GridSkillsComponent } from './grid-skills/grid-skills.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ 
		path: '', 
		component: GridSkillsComponent 
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
