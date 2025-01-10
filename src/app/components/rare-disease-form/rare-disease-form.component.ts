import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rare-disease-form',
  standalone: true, // If this is a standalone component
  imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule here
  templateUrl: './rare-disease-form.component.html',
  styleUrls: ['./rare-disease-form.component.css']
})
export class RareDiseaseFormComponent {
  rareDiseaseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rareDiseaseForm = this.fb.group({
      occasion: ['', Validators.required],
      rareCondition: ['', Validators.required],
      date: ['', Validators.required],
      updatedBy: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.rareDiseaseForm.valid) {
      console.log(this.rareDiseaseForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
