import { EmpleoService } from './../../../../build/backend-api/api/empleo.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Empleo } from 'build/backend-api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-jobslist',
  templateUrl: './card-jobslist.component.html',
  styleUrls: ['./card-jobslist.component.css']
})
export class CardJobslistComponent implements OnInit {

  jobs: Empleo[]
  @Input() selectedCategory: number

  constructor(private _empleoService: EmpleoService ) { }

  ngOnInit(): void {
      this._empleoService.getEmpleos().subscribe(data => this.jobs = data);
  }

  ngOnChanges() {
    console.log(this.selectedCategory);
    this._empleoService.getEmpleoByCategory(this.selectedCategory).subscribe(data => this.jobs = data);
  }
}
