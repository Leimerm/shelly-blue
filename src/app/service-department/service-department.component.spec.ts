import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDepartmentComponent } from './service-department.component';

describe('ServiceDepartmentComponent', () => {
  let component: ServiceDepartmentComponent;
  let fixture: ComponentFixture<ServiceDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
