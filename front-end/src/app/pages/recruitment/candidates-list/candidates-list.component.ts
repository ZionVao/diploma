import { Component } from '@angular/core';

export interface Candidate {
  vacancy: string;
  name: string;
  hiringManager: string;
  dateOfApplication: string;
  status: string;
}

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent {
  candidates = [
    {
      vacancy: 'Software Developer',
      name: 'John Doe',
      hiringManager: 'Alice Johnson',
      dateOfApplication: '2023-06-15',
      status: 'Pending',
    },
    {
      vacancy: 'Data Analyst',
      name: 'Jane Smith',
      hiringManager: 'Bob Anderson',
      dateOfApplication: '2023-06-10',
      status: 'Accepted',
    },
    {
      vacancy: 'UX Designer',
      name: 'Robert Johnson',
      hiringManager: 'Catherine Brown',
      dateOfApplication: '2023-06-12',
      status: 'Rejected',
    },
  ];

  displayedColumns: string[] = [
    'vacancy',
    'name',
    'hiringManager',
    'dateOfApplication',
    'status',
    'actions',
  ];
}
