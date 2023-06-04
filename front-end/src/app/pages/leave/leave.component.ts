import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss'],
})
export class LeaveComponent {
  links = [
    { link: 'apply', lable: 'Apply' },
    { link: 'my-leave', lable: 'My Leave' },
    { link: 'leave-list', lable: 'Leave List' },
    { link: 'assign-leave', lable: 'Assign Leave' },
  ];
  activeLink = this.links[0].link;
}
