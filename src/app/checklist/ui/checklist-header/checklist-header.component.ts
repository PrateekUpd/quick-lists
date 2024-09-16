import { Component, input, output } from '@angular/core';
import { Checklist } from '../../../shared/interfaces/checklist';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checklist-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <a data-testid="back-button" routerLink="/home">Back</a>
      <h1 data-testid="checklist-title">
        {{ checklist().title }}
      </h1>
      <div>
        <button
          (click)="resetChecklist.emit(checklist().id)"
          data-testid="reset-items-button"
        >
          Reset
        </button>
        <button
          (click)="addItem.emit()"
          data-testid="create-checklist-item-button"
        >
          Add Item
        </button>
      </div>
    </header>
  `,
  styles: [
    `
      button {
        margin-left: 1rem;
      }
    `
  ]
})
export class ChecklistHeaderComponent {
  checklist = input.required<Checklist>();
  addItem = output();
  resetChecklist = output<string>();

}
