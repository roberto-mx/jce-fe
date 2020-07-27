import { Component, OnInit } from '@angular/core';
import { Categoria, CategoryService } from 'build/backend-api';

@Component({
  selector: 'app-select-categorislist',
  templateUrl: './select-categorislist.component.html',
  styleUrls: ['./select-categorislist.component.css']
})
export class SelectCategorislistComponent implements OnInit {

  categories: Categoria[];
  selectedCategoria: string;
  

  constructor(private _CategoryService: CategoryService) { 
  }

  ngOnInit(): void {
    this._CategoryService.getCategories().subscribe(data => this.categories = data);
  }

}
