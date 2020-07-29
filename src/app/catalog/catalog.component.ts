import { Component, OnInit } from '@angular/core';
//import { User } from "backend-api";
import { DefaultService } from 'backend-api';
import { Category } from 'backend-api';



@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
	
  categories: Category;

  constructor(private _defaultService: DefaultService) { }

  ngOnInit(): void {
	
	this._defaultService.catalogGet().subscribe( data  => {
		this.categories = data;
		console.log(this.categories);
	});
	
	
  }

}
