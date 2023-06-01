import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMonth',
})
export class FilterMonthPipe implements PipeTransform {
  transform(dates: Date[], month: string): Date[] {
    if (!dates || !month) {
      return dates;
    }

    const filteredDates: Date[] = [];

    for (const date of dates) {
      if (date.getMonth() === this.getMonthIndex(month)) {
        filteredDates.push(date);
      }
    }

    return filteredDates;
  }

  private getMonthIndex(month: string): number {
    const months: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    return months.indexOf(month);
  }
}
