import { Component } from '@angular/core';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss'],
})
export class ShiftsComponent {
  shiftsData = [
    {
      shiftId: 1,
      name: 'Morning Shift',
      from: '9:00 AM',
      to: '5:00 PM',
      hoursPerDay: 8,
    },
    {
      shiftId: 2,
      name: 'Afternoon Shift',
      from: '1:00 PM',
      to: '9:00 PM',
      hoursPerDay: 8,
    },
    {
      shiftId: 3,
      name: 'Night Shift',
      from: '5:00 PM',
      to: '1:00 AM',
      hoursPerDay: 8,
    },
    // Add more shifts data here if needed
  ];
  displayedColumns: string[] = ['name', 'from', 'to', 'hoursPerDay', 'actions'];

  edit(shift: any) {
    // Handle edit action here
    console.log('Edit:', shift);
  }

  delete(shift: any) {
    // Handle delete action here
    console.log('Delete:', shift);
  }
}
