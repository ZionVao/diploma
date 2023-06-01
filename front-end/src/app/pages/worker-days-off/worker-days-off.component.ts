import { Component } from '@angular/core';

export interface Employee {
  name: string;
  daysOff: string[];
}

@Component({
  selector: 'app-worker-days-off',
  templateUrl: './worker-days-off.component.html',
  styleUrls: ['./worker-days-off.component.scss'],
})
export class WorkerDaysOffComponent {
  employees: Employee[] = [
    { name: 'John', daysOff: ['2023-06-02', '2023-06-09'] },
    { name: 'Sarah', daysOff: ['2023-06-03', '2023-06-10', '2023-06-17'] },
    // ... add more employees
  ];

  currentMonth: Date = new Date();
  allDaysInMonth: string[] = [];

  constructor() {
    this.generateAllDaysInMonth();
  }

  generateAllDaysInMonth() {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const day = new Date(year, month, i).toISOString().substring(0, 10);
      this.allDaysInMonth.push(day);
    }
  }

  isDayOff(employee: any, day: string): boolean {
    return employee.daysOff.includes(day);
  }

  get schedulerColumns(): string[] {
    return ['name', ...this.allDaysInMonth];
  }
}
