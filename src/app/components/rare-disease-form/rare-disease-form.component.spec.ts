import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareDiseaseFormComponent } from './rare-disease-form.component';

describe('RareDiseaseFormComponent', () => {
  let component: RareDiseaseFormComponent;
  let fixture: ComponentFixture<RareDiseaseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RareDiseaseFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RareDiseaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
