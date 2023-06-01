import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDaysOffComponent } from './worker-days-off.component';

describe('WorkerDaysOffComponent', () => {
  let component: WorkerDaysOffComponent;
  let fixture: ComponentFixture<WorkerDaysOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerDaysOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerDaysOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
