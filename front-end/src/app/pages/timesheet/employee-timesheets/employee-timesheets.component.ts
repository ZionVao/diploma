import { Component } from '@angular/core';

// export interface Timesheet {
//   date: Date;
//   hoursWorked: number;
//   project: string;
//   activity: string;
//   hoursSpent: { [day: string]: number }; // Add hoursSpent property
// }

export type daysOfWeekType =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday';

export interface TimesheetEntry
  extends Partial<Record<daysOfWeekType, { spentHours: number }>> {
  project: string;
  activity: string;
}

@Component({
  selector: 'app-employee-timesheets',
  templateUrl: './employee-timesheets.component.html',
  styleUrls: ['./employee-timesheets.component.scss'],
})
export class EmployeeTimesheetsComponent {
  // Replace the example data with your actual timesheet data
  dataSource: TimesheetEntry[] = [
    {
      project: 'Project 1',
      activity: 'Activity 1',
      Monday: { spentHours: 4 },
      Tuesday: { spentHours: 5 },
      Friday: { spentHours: 2 },
    },
    {
      project: 'Project 2',
      activity: 'Activity 2',
      Monday: { spentHours: 6 },
      Friday: { spentHours: 3 },
    },
    // Add more entries as needed
  ];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Define the columns to be displayed in the table
  displayedColumns = ['project', 'activity', ...this.daysOfWeek, 'total'];

  calculateTotalHours(timesheetEntry: any): number {
    let totalHours = 0;
    for (const day of this.daysOfWeek) {
      if (timesheetEntry[day] && timesheetEntry[day].spentHours) {
        totalHours += timesheetEntry[day].spentHours;
      }
    }
    return totalHours;
  }

  calculateColumnTotal(column: string): number {
    let total = 0;
    if (column === 'total') {
      return this.dataSource
        .map((item) =>
          this.daysOfWeek
            .map((day) =>
              item[day as daysOfWeekType]
                ? item[day as daysOfWeekType]?.spentHours || 0
                : 0
            )
            .reduce((a, b) => a + b, 0)
        )
        .reduce((a, b) => a + b, 0);
    }
    for (const entry of this.dataSource) {
      if (entry[column as daysOfWeekType]) {
        const spentHours = entry[column as daysOfWeekType]?.spentHours;
        total += spentHours || 0;
      }
    }
    return total;
  }
}
