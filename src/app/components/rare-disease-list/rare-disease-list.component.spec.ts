import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareDiseaseListComponent } from './rare-disease-list.component';

describe('RareDiseaseListComponent', () => {
  let component: RareDiseaseListComponent;
  let fixture: ComponentFixture<RareDiseaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RareDiseaseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RareDiseaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
