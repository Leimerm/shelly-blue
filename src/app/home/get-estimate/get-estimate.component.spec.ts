import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEstimateComponent } from './get-estimate.component';

describe('GetEstimateComponent', () => {
  let component: GetEstimateComponent;
  let fixture: ComponentFixture<GetEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
