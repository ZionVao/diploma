import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface Employee {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
  // Add more properties as needed
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 2,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 3,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 4,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 5,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 1,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 2,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 3,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 4,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 5,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
  ];
  filteredEmployees: Employee[] = [
    {
      id: 1,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 2,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 3,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 4,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 5,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 1,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 2,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 3,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 4,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
    {
      id: 5,
      name: 'Patrick',
      email: 'mail@mail',
      photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    },
  ];
  currentPage = 1;
  pageSize = 10;
  searchQuery = '';

  // constructor(private http: HttpClient) {}
  constructor() {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    // this.http
    //   .get<Employee[]>('/api/employees')
    //   .subscribe((data: Employee[]) => {
    //     this.employees = data;
    //     this.filterEmployees();
    //   });
    return [
      {
        id: 1,
        name: 'Patrick',
        email: 'mail@mail',
        photoUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
      },
    ];
  }

  filterEmployees() {
    this.filteredEmployees = this.employees.filter((employee) => {
      return employee.name
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase());
    });
    this.currentPage = 1;
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
}
