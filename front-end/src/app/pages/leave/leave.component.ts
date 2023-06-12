import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss'],
})
export class LeaveComponent implements OnInit {
  constructor(private router: Router) {}

  links = [
    { link: 'apply', lable: 'Apply' },
    { link: 'my-leave', lable: 'My Leave' },
    { link: 'leave-list', lable: 'Leave List' },
    { link: 'assign-leave', lable: 'Assign Leave' },
  ];
  activeLink = this.links[0].link;
  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
