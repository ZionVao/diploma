import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

interface Employee {
  name: string;
  email: string;
  photoUrl: string;
  jobPosition: string;
  department: string;
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
      name: 'John Doe',
      email: 'johndoe@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Software Engineer',
      department: 'Engineering',
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Marketing Manager',
      department: 'Marketing',
    },
    {
      name: 'Mike Johnson',
      email: 'mikejohnson@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Sales Representative',
      department: 'Sales',
    },
    {
      name: 'Emily Davis',
      email: 'emilydavis@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Graphic Designer',
      department: 'Creative',
    },
    {
      name: 'David Lee',
      email: 'davidlee@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Product Manager',
      department: 'Product',
    },
    {
      name: 'Julia Wilson',
      email: 'juliawilson@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'HR Manager',
      department: 'Human Resources',
    },
    {
      name: 'Michael Johnson',
      email: 'michaeljonson@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'HR Manager',
      department: 'Human Resources',
    },
    {
      name: 'Amy Roberts',
      email: 'amyroberts@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Finance Manager',
      department: 'Finance',
    },
    {
      name: 'Daniel Brown',
      email: 'danielbrown@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Operations Supervisor',
      department: 'Operations',
    },
    {
      name: 'Jennifer Anderson',
      email: 'jenniferanderson@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Customer Support Specialist',
      department: 'Customer Service',
    },
    {
      name: 'Thomas Garcia',
      email: 'thomasgarcia@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Quality Assurance Engineer',
      department: 'Engineering',
    },
    {
      name: 'Olivia Martinez',
      email: 'oliviamartinez@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Marketing Coordinator',
      department: 'Marketing',
    },
    {
      name: 'Robert Clark',
      email: 'robertclark@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Sales Manager',
      department: 'Sales',
    },
    {
      name: 'Jessica Wright',
      email: 'jessicawright@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'UX Designer',
      department: 'Creative',
    },
    {
      name: 'William Turner',
      email: 'williamturner@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Product Owner',
      department: 'Product',
    },
    {
      name: 'Emma Hall',
      email: 'emmahall@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'HR Manager',
      department: 'Human Resources',
    },
    {
      name: 'Christopher White',
      email: 'christopherwhite@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Data Scientist',
      department: 'Analytics',
    },
    {
      name: 'Sophia Turner',
      email: 'sophiaturner@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Financial Analyst',
      department: 'Finance',
    },
    {
      name: 'Anthony Harris',
      email: 'anthonyharris@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/700/700674.png',
      jobPosition: 'Warehouse Manager',
      department: 'Operations',
    },
    {
      name: 'Grace Mitchell',
      email: 'gracemitchell@example.com',
      photoUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
      jobPosition: 'Technical Support Specialist',
      department: 'Customer Service',
    },
  ];

  filteredEmployees: Employee[] = this.employees;

  currentPage = 1;
  pageSize = 9;
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
