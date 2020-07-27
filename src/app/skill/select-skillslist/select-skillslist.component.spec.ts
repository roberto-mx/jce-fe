import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSkillslistComponent } from './select-skillslist.component';

describe('SelectSkillslistComponent', () => {
  let component: SelectSkillslistComponent;
  let fixture: ComponentFixture<SelectSkillslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSkillslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSkillslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
