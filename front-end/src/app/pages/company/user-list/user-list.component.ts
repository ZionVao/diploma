import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      role: 'Manager',
      status: 'Enabled',
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      role: 'User',
      status: 'Disabled',
    },
    {
      name: 'Julia Wilson',
      email: 'juliawilson@example.com',
      role: 'Manager, Admin',
      status: 'Enabled',
    },
    // Add more users here
  ];

  constructor() {}

  ngOnInit() {}

  editUser(user: any) {
    // Handle edit action here, e.g., navigate to edit user page
    console.log('Edit user:', user);
  }

  deleteUser(user: any) {
    // Handle delete action here, e.g., show confirmation dialog and delete user
    console.log('Delete user:', user);
  }
}
