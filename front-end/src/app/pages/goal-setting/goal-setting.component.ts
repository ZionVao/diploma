import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-goal-setting',
  templateUrl: './goal-setting.component.html',
  styleUrls: ['./goal-setting.component.scss'],
})
export class GoalSettingComponent {
  goalForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    dueDate: ['', Validators.required],
    priority: ['', Validators.required],
    notify: [false],
  });

  constructor(private formBuilder: FormBuilder) {}

  submitForm() {
    if (this.goalForm.invalid) {
      return;
    }

    // TODO: Save the goal to the database or perform any other necessary actions

    // Reset the form
    this.goalForm.reset();
  }
}
