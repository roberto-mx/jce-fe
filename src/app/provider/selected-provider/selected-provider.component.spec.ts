import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProviderComponent } from './selected-provider.component';

describe('SelectedProviderComponent', () => {
  let component: SelectedProviderComponent;
  let fixture: ComponentFixture<SelectedProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
