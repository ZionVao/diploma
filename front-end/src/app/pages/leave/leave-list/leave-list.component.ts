import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Leave {
  date: string;
  employeeName: string;
  leaveType: string;
  leaveBalance: number;
  numberOfDays: number;
  status: string;
  comments: string;
}

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.scss'],
})
export class LeaveListComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'employeeName',
    'leaveType',
    'leaveBalance',
    'numberOfDays',
    'status',
    'comments',
    'actions',
  ];
  dataSource!: MatTableDataSource<Leave>;
  selection = new SelectionModel<Leave>(true, []);

  leaves: Leave[] = [
    {
      date: '2022-08-25 to 2022-08-26',
      employeeName: 'John Doe',
      leaveType: 'Vacation',
      leaveBalance: 10,
      numberOfDays: 2,
      status: 'Pending',
      comments: 'Vacation',
    },
    {
      date: '21-06-2023 to 24-06-2023',
      employeeName: 'Jane Smith',
      leaveType: 'Sick Leave',
      leaveBalance: 15,
      numberOfDays: 3,
      status: 'Pending',
      comments: 'Sick Leave',
    },
    // Add more leave objects as needed
  ];

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Leave>(this.leaves);
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // editLeave(leave: Leave) {
  //   // Handle edit action
  // }

  approveLeave(leave: Leave) {
    // Handle approve action
    leave.status = 'Approved';

    this.leaves = [...this.leaves, { ...leave, status: 'Approved' }];
  }

  rejectLeave(leave: Leave) {
    leave.status = 'Rejected';

    this.leaves = [...this.leaves, { ...leave, status: 'Rejected' }];
  }
}
