import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RareDiseaseService } from '../../services/rare-disease.service';
import { RareDisease } from '../../models/rare-disease';

@Component({
  selector: 'app-rare-disease-form',
  templateUrl: './rare-disease-form.component.html',
  styleUrls: ['./rare-disease-form.component.css']
})
export class RareDiseaseFormComponent {
  diseaseForm: FormGroup;

  constructor(private fb: FormBuilder, private diseaseService: RareDiseaseService) {
    this.diseaseForm = this.fb.group({
      occasion: ['', Validators.required],
      rareCondition: ['', Validators.required],
      date: ['', Validators.required],
      updatedBy: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.diseaseForm.valid) {
      const disease: RareDisease = this.diseaseForm.value;
      this.diseaseService.addDisease(disease).subscribe(() => {
        // Handle success (e.g., navigate back to the list)
      });
    }
  }
}
