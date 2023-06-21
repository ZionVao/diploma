import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  leaveBalance = [
    { type: 'Vacation', days: 10, icon: 'beach_access', color: 'primary' },
    { type: 'Sick', days: 5, icon: 'sick', color: 'accent' },
    { type: 'Personal', days: 3, icon: 'folder', color: 'warn' },
  ];

  actionsData = [
    {
      type: 'Leave Requests to Approve',
      count: 2,
      icon: 'pending_actions',
      color: 'primary',
    },
    // {
    //   type: 'Timesheets to Approve',
    //   count: 9,
    //   icon: 'punch_clock',
    //   color: 'accent',
    // },
    // {
    //   type: 'Candidate to Interview',
    //   count: 1,
    //   icon: 'work_history',
    //   color: 'warn',
    // },
  ];
}
