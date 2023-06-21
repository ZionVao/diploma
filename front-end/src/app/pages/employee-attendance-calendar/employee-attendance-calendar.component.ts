import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-employee-attendance-calendar',
  templateUrl: './employee-attendance-calendar.component.html',
  styleUrls: ['./employee-attendance-calendar.component.scss'],
})
export class EmployeeAttendanceCalendarComponent {
  attendanceEvents: EventInput[] = [
    {
      color: 'red',
      title: 'John Doe - Sick Leave',
      start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00',
      end: new Date().toISOString().replace(/T.*$/, '') + 'T15:00:00',
    },
    {
      title: 'Jane Smith - Annual Leave',
      start: new Date().toISOString().replace(/T.*$/, ''),
      end: new Date('2023-07-01').toISOString().replace(/T.*$/, ''),
    },
    {
      color: 'red',
      title: 'Julia Wilson - Sick Leave',
      start: new Date('2023-06-16').toISOString().replace(/T.*$/, ''),
      end: new Date('2023-06-19').toISOString().replace(/T.*$/, ''),
    },
    {
      color: 'green',
      title: 'Daniel Brown - Personal',
      start: new Date('2023-06-25').toISOString().replace(/T.*$/, ''),
    },
  ];

  // handleDateClick(arg: DateSelectArg) {
  //   console.log('Date clicked:', arg.dateStr);
  // }

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: this.attendanceEvents, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: false,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: false,
  };
}
