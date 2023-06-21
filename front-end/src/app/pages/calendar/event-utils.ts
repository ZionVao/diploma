import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: new Date('2023-06-16').toISOString().replace(/T.*$/, ''),
  },
  {
    id: createEventId(),
    title: 'Morning meeting',
    start: TODAY_STR + 'T10:00:00',
    end: TODAY_STR + 'T13:00:00',
  },
  {
    id: createEventId(),
    title: 'Interview',
    start: TODAY_STR + 'T14:00:00',
    end: TODAY_STR + 'T15:00:00',
  },
];

export function createEventId() {
  return String(eventGuid++);
}
