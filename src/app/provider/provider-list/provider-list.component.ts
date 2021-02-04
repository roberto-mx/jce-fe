import { ProviderService } from '../../../../build/backend-api/api/provider.service';
import { Component, OnInit, Input } from '@angular/core';
import { Provider, Skill, SkillService } from 'build/backend-api';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderlistComponent implements OnInit {

  providers: Provider[];
  selectedSkill: any;
  objSkill: Skill
  constructor(private _providerService: ProviderService, private _activatedRoute: ActivatedRoute, private _skillService: SkillService) { }

  ngOnInit(): void {
   this._activatedRoute.params.subscribe(data => this.selectedSkill = data.id);
  this._skillService.getSkillById(this.selectedSkill).subscribe(data => this.objSkill = data);
   //this._providerService.getProvidersBySkillId(this.selectedSkill).subscribe(data => this.providers = data);
  }

}
