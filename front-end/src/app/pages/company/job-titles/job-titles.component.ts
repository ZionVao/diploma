import { Component } from '@angular/core';

@Component({
  selector: 'app-job-titles',
  templateUrl: './job-titles.component.html',
  styleUrls: ['./job-titles.component.scss'],
})
export class JobTitlesComponent {
  jobTitles = [
    { position: '1', title: 'Software Engineer', department: 'Engineering' },
    { position: '2', title: 'Marketing Manager', department: 'Marketing' },
    { position: '3', title: 'Sales Representative', department: 'Sales' },
    // Add more job titles as needed
  ];

  displayedColumns: string[] = ['title', 'department', 'actions'];

  editJobTitle(jobTitle: any) {
    // Handle edit action here
    console.log('Edit:', jobTitle);
  }

  deleteJobTitle(jobTitle: any) {
    // Handle delete action here
    console.log('Delete:', jobTitle);
  }
}
