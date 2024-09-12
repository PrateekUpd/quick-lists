import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemListComponent } from './checklist-item-list.component';

describe('ChecklistItemListComponent', () => {
  let component: ChecklistItemListComponent;
  let fixture: ComponentFixture<ChecklistItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecklistItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
