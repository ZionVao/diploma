import { Component } from '@angular/core';

export interface TimesheetData {
  project: string;
  activity: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
}

@Component({
  selector: 'app-my-timesheet',
  templateUrl: './my-timesheet.component.html',
  styleUrls: ['./my-timesheet.component.scss'],
})
export class MyTimesheetComponent {
  activityOptions = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];
  projectOptions = [
    { value: 'Project A', label: 'Project A' },
    { value: 'Project B', label: 'Project B' },
    { value: 'Project C', label: 'Project C' },
  ];

  timesheetData: TimesheetData[] = [
    {
      project: '',
      activity: '',
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
    },
  ];

  displayedColumns: string[] = [
    'project',
    'activity',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'actions',
  ];

  addRow() {
    this.timesheetData = [
      ...this.timesheetData,
      {
        project: '',
        activity: '',
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
      },
    ];
  }

  // deleteRow() {
  //   if (this.timesheetData.length > 0) {
  //     this.timesheetData.pop();
  //   }
  // }

  removeRow(index: number): void {
    this.timesheetData = this.timesheetData.filter(
      (i) => this.timesheetData.indexOf(i) !== index
    );
  }
}
