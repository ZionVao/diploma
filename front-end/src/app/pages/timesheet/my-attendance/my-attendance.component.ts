import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-my-attendance',
  templateUrl: './my-attendance.component.html',
  styleUrls: ['./my-attendance.component.scss'],
})
export class MyAttendanceComponent implements OnInit {
  attendanceData = [
    {
      date: '2023-06-01',
      totalDuration: '8',
    },
    {
      date: '2023-06-02',
      totalDuration: '6',
    },
    {
      date: '2023-06-03',
      totalDuration: '0',
    },
    {
      date: '2023-06-04',
      totalDuration: '8',
    },
    // Add more attendance records here
  ];

  displayedColumns: string[] = ['date', 'totalDuration', 'actions'];

  editRecord(record: any) {
    // Handle edit action
    console.log('Edit record:', record);
  }

  deleteRecord(record: any) {
    // Handle delete action
    console.log('Delete record:', record);
  }

  attendanceForm!: FormGroup;
  punchOutTime!: Date;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.attendanceForm = this.formBuilder.group({
      // employeeName: ['', Validators.required],
      punchDate: ['', Validators.required],
      punchInTime: ['', Validators.required],
      punchOutTime: ['', [Validators.required, this.timeOutValidator]],
    });
  }

  punch() {
    if (this.attendanceForm.invalid) {
      return;
    }

    console.log('Form submitted');
    console.log(this.attendanceForm.value);
  }

  timeOutValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const start = Date.parse(
      `01/01/2011 ${control.parent?.get('punchInTime')?.value}`
    );
    const end = Date.parse(`01/01/2011 ${control.value}`);

    if (end <= start) {
      return { invalidTimeOut: true };
    }
    return null;
  }
}
