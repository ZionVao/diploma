import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Leave {
  date: string;
  leaveType: string;
  numberOfDays: number;
  status: string;
  comments: string;
}

@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.scss'],
})
export class MyLeaveComponent implements OnInit {
  leaveBalance = [
    { type: 'Vacation', days: 10, icon: 'beach_access', color: 'primary' },
    { type: 'Sick', days: 5, icon: 'sick', color: 'accent' },
    { type: 'Personal', days: 3, icon: 'folder', color: 'warn' },
  ];

  leaves: Leave[] = [
    {
      date: '2022-08-25 to 2022-08-26',
      leaveType: 'Vacation',
      numberOfDays: 2,
      status: 'Rejected',
      comments: 'Vacation',
    },
    {
      date: '16-06-2023 to 19-06-2023',
      leaveType: 'Sick Leave',
      numberOfDays: 3,
      status: 'Approved',
      comments: 'Sick Leave',
    },
    {
      date: '22-06-2023 to 24-06-2023',
      leaveType: 'Sick Leave',
      numberOfDays: 2,
      status: 'Pending',
      comments: 'Sick Leave',
    },
    // Add more leave objects as needed
  ];

  displayedColumns: string[] = [
    'date',
    'leaveType',
    'numberOfDays',
    'status',
    'comments',
  ];

  dataSource!: MatTableDataSource<Leave>;
  selection = new SelectionModel<Leave>(true, []);

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Leave>(this.leaves);
  }
}
