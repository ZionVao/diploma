import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss'],
})
export class FullComponent {
  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  routerActive: string = 'activelink';

  sidebarMenu: sidebarMenu[] = [
    {
      link: '/home',
      icon: 'home',
      menu: 'Dashboard',
    },
    {
      link: '/calendar',
      icon: 'calendar',
      menu: 'Calendar',
    },
    {
      link: '/company',
      icon: 'briefcase',
      menu: 'Company',
    },
    {
      link: '/employees',
      icon: 'users',
      menu: 'Employees',
    },
    {
      link: '/company-tree',
      icon: 'git-commit',
      menu: 'Tree',
    },
    {
      link: '/okr',
      icon: 'compass',
      menu: 'OKR',
    },
    {
      link: '/vacations-and-requests',
      icon: 'coffee',
      menu: 'Vacations and Requests',
    },
    {
      link: '/leave',
      icon: 'cloud',
      menu: 'Leave',
    },
    {
      link: '/time-tracking',
      icon: 'watch',
      menu: 'Time Tracking',
    },
    {
      link: '/events',
      icon: 'star',
      menu: 'Events',
    },
    {
      link: '/recruitment',
      icon: 'search',
      menu: 'Recruitment',
    },
    {
      link: '/profile',
      icon: 'user',
      menu: 'Profile',
    },
    {
      link: '/todo',
      icon: 'clipboard',
      menu: 'TODO',
    },
    {
      link: '/settings',
      icon: 'settings',
      menu: 'Settings',
    },
  ];
}
