import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderslistComponent } from './service-providerslist.component';

describe('ServiceProviderslistComponent', () => {
  let component: ServiceProviderslistComponent;
  let fixture: ComponentFixture<ServiceProviderslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
