import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'backend-api';
import { Category } from 'backend-api';


@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  categories: Category;

  constructor(private _defaultService: DefaultService) { }

  ngOnInit(): void {

    this._defaultService.catalogGet().subscribe( data  => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  


}
