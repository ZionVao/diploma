import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss'],
})
export class ApplyLeaveComponent implements OnInit {
  leaveForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.leaveForm = this.formBuilder.group({
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
      this.router.navigate(['/leave/my-leave']);
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
