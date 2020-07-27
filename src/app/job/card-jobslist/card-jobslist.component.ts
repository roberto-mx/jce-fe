import { Component, OnInit } from '@angular/core';
import { Empleo } from 'build/backend-api';

@Component({
  selector: 'app-card-jobslist',
  templateUrl: './card-jobslist.component.html',
  styleUrls: ['./card-jobslist.component.css']
})
export class CardJobslistComponent implements OnInit {

  jobs: Empleo

  constructor() { }

  ngOnInit(): void {
  }

}
