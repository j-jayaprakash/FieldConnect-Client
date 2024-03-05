import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingComponent } from './service-booking.component';

describe('ServiceBookingComponent', () => {
  let component: ServiceBookingComponent;
  let fixture: ComponentFixture<ServiceBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBookingComponent]
    });
    fixture = TestBed.createComponent(ServiceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
