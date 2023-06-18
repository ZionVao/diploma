import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export const quillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
};

// export interface IVacancy {
//   description: string;
// }

@Component({
  selector: 'app-edit-vacancy',
  templateUrl: './edit-vacancy.component.html',
  styleUrls: ['./edit-vacancy.component.scss'],
})
export class EditVacancyComponent implements OnInit {
  vacancyId!: string;
  editForm!: FormGroup;

  description: any = [
    { insert: 'Hello ' },
    { insert: 'World!', attributes: { bold: true } },
    { insert: '\n' },
  ];

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.description = JSON.parse(localStorage.getItem('draft') || '');
  }

  ngOnInit() {
    this.vacancyId = this.route.snapshot.paramMap.get('id') || '1';

    this.editForm = this.formBuilder.group({
      position: ['', Validators.required],
      jobTitle: ['', Validators.required],
      hiringManager: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.loadVacancyData();
    this.description = JSON.parse(localStorage.getItem('draft') || '');
  }

  loadVacancyData() {
    const vacancyData = this.getVacancyData(this.vacancyId);

    if (vacancyData) {
      this.editForm.patchValue(vacancyData);
    }
  }

  getVacancyData(vacancyId: string): any {
    const vacancies = [
      {
        id: '1',
        position: 'Software Engineer',
        jobTitle: 'Senior Software Engineer',
        hiringManager: 'John Doe',
        status: 'Open',
        description: 'yxyhc',
      },
      {
        id: '2',
        position: 'Frontend Developer',
        jobTitle: 'UI/UX Developer',
        hiringManager: 'Jane Smith',
        status: 'Closed',
        description: 'ujhgf',
      },
      {
        id: '3',
        position: 'Data Analyst',
        jobTitle: 'Data Science Analyst',
        hiringManager: 'Michael Johnson',
        status: 'Open',
        description: 'qwerty',
      },
    ];

    return vacancies.find((vacancy) => vacancy.id === vacancyId);
  }

  saveVacancy() {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      console.log('Saving vacancy:', formData);
    }
    localStorage.setItem('draft', JSON.stringify(this.description));
    console.log(this.description);
  }

  cancelEdit() {
    console.log('Edit cancelled');
  }
}
