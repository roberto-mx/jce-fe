import { SkillService } from './../../../../build/backend-api/api/skill.service';
import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'build/backend-api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-skills',
  templateUrl: './grid-skills.component.html',
  styleUrls: ['./grid-skills.component.css']
})
export class GridSkillsComponent implements OnInit {

  skills : Skill[]
  selectedSkillId: any;

  constructor(private route: ActivatedRoute, private _skillService: SkillService) {}

  ngOnInit(): void {    
    this.route.params.subscribe(data => this.selectedSkillId = data.id);
    console.log(this.selectedSkillId);
    this._skillService.getSkillByIdEmpleoId(this.selectedSkillId).subscribe(data => this.skills = data);
   
  }

  ngOnChanges() {
    console.log(this.selectedSkillId);
    this._skillService.getSkillByIdEmpleoId(this.selectedSkillId).subscribe(data => this.skills = data);
  }

}
