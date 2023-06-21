import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.scss'],
})
export class VacanciesListComponent implements OnInit {
  vacancies = [
    {
      id: '1',
      position: 'Software Engineer',
      jobTitle: 'Senior Software Engineer',
      hiringManager: 'Julia Wilson',
      status: 'Open',
    },
    {
      id: '2',
      position: 'Frontend Developer',
      jobTitle: 'UI/UX Developer',
      hiringManager: 'Michael Johnson',
      status: 'Closed',
    },
    {
      id: '3',
      position: 'Data Analyst',
      jobTitle: 'Data Science Analyst',
      hiringManager: 'Emma Hall',
      status: 'Open',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  deleteVacancy(vacancy: any) {
    // Implement your delete logic here
    console.log('Deleting vacancy:', vacancy);
  }

  // editVacancy(vacancy: any) {
  //   // Implement your edit logic here
  //   console.log('Editing vacancy:', vacancy);
  // }

  editVacancy(vacancy: any) {
    const vacancyId = vacancy.id; // Replace 'id' with the actual ID property of your vacancy object

    this.router.navigate(['recruitment/edit-vacancy', vacancyId]);
  }
}
