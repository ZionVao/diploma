import { Component } from '@angular/core';

@Component({
  selector: 'app-employment-status',
  templateUrl: './employment-status.component.html',
  styleUrls: ['./employment-status.component.scss'],
})
export class EmploymentStatusComponent {
  dataSource = [
    { status: 'Full-time' },
    { status: 'Part-time' },
    { status: 'Contract' },
    { status: 'Freelance' },
  ];

  displayedColumns: string[] = ['status', 'actions'];

  editJobTitle(jobTitle: any) {
    // Handle edit action here
    console.log('Edit:', jobTitle);
  }

  deleteJobTitle(jobTitle: any) {
    // Handle delete action here
    console.log('Delete:', jobTitle);
  }
}
