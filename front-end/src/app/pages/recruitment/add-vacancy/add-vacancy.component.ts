import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit {
  addForm!: FormGroup;
  description: any = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      position: ['', Validators.required],
      jobTitle: ['', Validators.required],
      hiringManager: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  saveVacancy() {
    if (this.addForm.valid) {
      this.router.navigate(['/recruitment/vacancies']);
    }
  }

  cancelEdit() {
    console.log('Edit cancelled');
  }
}
