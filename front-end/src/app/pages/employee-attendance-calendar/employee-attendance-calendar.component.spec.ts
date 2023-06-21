import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttendanceCalendarComponent } from './employee-attendance-calendar.component';

describe('EmployeeAttendanceCalendarComponent', () => {
  let component: EmployeeAttendanceCalendarComponent;
  let fixture: ComponentFixture<EmployeeAttendanceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAttendanceCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAttendanceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
