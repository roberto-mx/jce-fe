import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  name: string;

  constructor() {
   }

  ngOnInit(): void {
    this.name = 'Kelly';
  }

  createUser(): void{
  }

}
