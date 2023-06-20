import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor(private router: Router) {}

  links = [
    { link: 'user-management', lable: 'User Management' },
    { link: 'job', lable: 'Jobs Titles' },
    { link: 'employment-status', lable: 'Employment Status' },
    { link: 'work-shifts', lable: 'Work Shifts' },
    { link: 'organization-structure', lable: 'Organization Structure' },
  ];
  activeLink = this.links[0].link;
  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
