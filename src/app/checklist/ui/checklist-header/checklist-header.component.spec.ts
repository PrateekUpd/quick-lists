import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistHeaderComponent } from './checklist-header.component';

describe('ChecklistHeaderComponent', () => {
  let component: ChecklistHeaderComponent;
  let fixture: ComponentFixture<ChecklistHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
