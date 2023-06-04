import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-assign-leave',
  templateUrl: './assign-leave.component.html',
  styleUrls: ['./assign-leave.component.scss'],
})
export class AssignLeaveComponent implements OnInit {
  leaveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.leaveForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
      leaveType: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', [Validators.required, this.endDateValidator]],
      partialDays: ['', Validators.required],
      reason: ['', Validators.required],
    });

    this.leaveForm.get('startDate')?.valueChanges.subscribe(() => {
      this.leaveForm.get('partialDays')?.setValue('');
    });

    this.leaveForm.get('endDate')?.valueChanges.subscribe(() => {
      this.leaveForm.get('partialDays')?.setValue('');
    });
  }

  endDateValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const startDate = new Date(control.parent?.get('startDate')?.value);
    const endDate = new Date(control.value);

    if (endDate < startDate) {
      return { invalidEndDate: true };
    }
    return null;
  }

  submitForm() {
    if (this.leaveForm.valid) {
      // Submit the form data to the server or perform necessary actions
      console.log(this.leaveForm.value);
    }
  }

  resetForm() {
    this.leaveForm.reset();
  }

  isSameDateRange(): boolean {
    const startDate = this.leaveForm.get('startDate')?.value;
    const endDate = this.leaveForm.get('endDate')?.value;

    if (!(startDate && endDate)) return false;
    const start = new Date(startDate).setHours(0, 0, 0, 0);
    const end = new Date(endDate).setHours(0, 0, 0, 0);

    return start === end;
  }
}
