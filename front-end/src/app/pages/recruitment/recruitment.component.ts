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
// {
// jobOpenings = [
//   {
//     id: 1,
//     title: 'Software Developer',
//     description:
//       'We are seeking a skilled software developer to join our team.',
//     location: 'Remote',
//   },
//   {
//     id: 2,
//     title: 'HR Manager',
//     description:
//       'We are hiring an experienced HR Manager to oversee our human resources department.',
//     location: 'New York',
//   },
//   // Add more job openings as needed
// ];
// showApplicationForm = false;
// application = {
//   fullName: '',
//   email: '',
//   coverLetter: '',
//   resumeUrl: '',
// };
// applyJob(jobId: number): void {
//   this.showApplicationForm = true;
//   // Additional logic to populate the application object based on the selected job
// }
// submitApplication(): void {
//   // Additional logic to submit the job application
//   // You can send the application data to a backend API for processing
//   console.log(this.application);
// }
// }
