import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  employee: any = {
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/4974/4974985.png',
    name: 'Julia Wilson',
    // age: 30,
    birthday: '14-01-2002',
    email: 'juliawilson@example.com',
    phone: '1234567890',
    skills: 'Performance Management, Employment Law',
    position: 'HR Manager',
    department: 'Human Resources',
  };

  selectedCategory: string = 'personal';

  navigateTo(category: string) {
    this.selectedCategory = category;
  }
}
