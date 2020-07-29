import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectServiceComponent } from '../select-service/select-service.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import {MatTreeModule} from '@angular/material/tree';




@NgModule({
  declarations: [SelectServiceComponent, FilterPipe],
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatTreeModule       
  ],
  exports: [SelectServiceComponent
    ]
})
export class SelectServiceModule { }
