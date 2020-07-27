import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSkillslistComponent } from './select-skillslist/select-skillslist.component';
import { GridSkillsComponent } from './grid-skills/grid-skills.component';
import { UiImportsModule } from '../ui-imports/ui-imports.module';
import { SkillRoutingModule } from './skill-routing.module';



@NgModule({
  declarations: [SelectSkillslistComponent, GridSkillsComponent],
  imports: [
    CommonModule,
    SkillRoutingModule,
    UiImportsModule,
  ]
})
export class SkillModule { }
