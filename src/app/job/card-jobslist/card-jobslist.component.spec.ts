import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJobslistComponent } from './card-jobslist.component';

describe('CardJobslistComponent', () => {
  let component: CardJobslistComponent;
  let fixture: ComponentFixture<CardJobslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardJobslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardJobslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
