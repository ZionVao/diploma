import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  employee: any = {
    imageUrl: 'https://www.w3schools.com/w3css/img_avatar3.png',
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    phone: '1234567890',
    skills: 'Angular, TypeScript, HTML, CSS',
    position: 'Software Developer',
    department: 'Engineering',
  };

  selectedCategory: string = 'personal';

  navigateTo(category: string) {
    this.selectedCategory = category;
  }
}
