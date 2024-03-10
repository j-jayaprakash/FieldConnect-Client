import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkHistoryComponent } from './my-work-history.component';

describe('MyWorkHistoryComponent', () => {
  let component: MyWorkHistoryComponent;
  let fixture: ComponentFixture<MyWorkHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorkHistoryComponent]
    });
    fixture = TestBed.createComponent(MyWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
