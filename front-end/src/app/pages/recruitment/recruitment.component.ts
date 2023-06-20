import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss'],
})
export class RecruitmentComponent implements OnInit {
  constructor(private router: Router) {}

  links = [
    { link: 'vacancies', lable: 'Vacancies' },
    { link: 'candidates', lable: 'Candidates' },
  ];
  activeLink = this.links[0].link;
  ngOnInit(): void {
    this.activeLink = this.router.url;
  }
}
