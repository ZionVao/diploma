import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class TimesheetComponent implements OnInit {
  constructor(private router: Router) {}

  links = [
    // { link: 'my-timesheet', lable: 'My Timeshheet' },
    // { link: 'employee-timesheets', lable: 'Employee Timeshheet' },
    { link: 'my-attendance', lable: 'My Attendance' },
    { link: 'employee-attendance', lable: 'Employee Attendance' },
  ];
  activeLink = this.links[0].link;
  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
