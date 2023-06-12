import { Component } from '@angular/core';

export interface AttendanceRecord {
  employeeName: string;
  punchInTime: Date;
  punchOutTime: Date;
  duration: number;
}

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.scss'],
})
export class EmployeeAttendanceComponent {
  employeeAttendanceRecords: AttendanceRecord[] = [
    // Add your attendance records data here
    {
      employeeName: 'John Smith',
      punchInTime: new Date('2023-06-10T08:30:00'),
      punchOutTime: new Date('2023-06-10T17:00:00'),
      duration: 8.5,
    },
    {
      employeeName: 'Jane Doe',
      punchInTime: new Date('2023-06-11T09:00:00'),
      punchOutTime: new Date('2023-06-11T18:30:00'),
      duration: 9.5,
    },
    // Add more attendance records if needed
  ];

  displayedColumns: string[] = [
    'employeeName',
    'punchInTime',
    'punchOutTime',
    'duration',
    'actions',
  ];

  editRecord(record: AttendanceRecord) {
    // Handle edit logic here
    console.log('Edit record:', record);
  }

  removeRecord(record: AttendanceRecord) {
    // Handle remove logic here
    console.log('Remove record:', record);
  }
}
