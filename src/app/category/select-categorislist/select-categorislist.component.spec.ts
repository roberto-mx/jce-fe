import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import { SelectCategorislistComponent } from './select-categorislist.component';

describe('SelectCategorislistComponent', () => {
  let component: SelectCategorislistComponent;
  let fixture: ComponentFixture<SelectCategorislistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCategorislistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCategorislistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
