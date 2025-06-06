import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProductionErrorsTrackingComponent } from './angular-production-errors-tracking.component';

describe('AngularProductionErrorsTrackingComponent', () => {
  let component: AngularProductionErrorsTrackingComponent;
  let fixture: ComponentFixture<AngularProductionErrorsTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularProductionErrorsTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularProductionErrorsTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
