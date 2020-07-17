import { Component, OnInit } from '@angular/core';
import { User } from "backend-api";
//import { DefaultService } from 'backend-api';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
	
  user: User;

  //constructor(private _defaultService: DefaultService) { }
  constructor() { }

  ngOnInit(): void {
	/*
	this._defaultService.userGet().subscribe( data  => {
		this.user = data;
		console.log(this.user);
	});*/
	
	
  }

}
