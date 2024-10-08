import { Component, input, output } from '@angular/core';
import { Checklist } from '../../../shared/interfaces/checklist';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checklist-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul>
      @for (checklist of checklists(); track checklist.id) {
      <li data-testid="checklist-item">
        <a
          routerLink="/checklist/{{ checklist.id }}"
          data-testid="checklist-link"
        >
          {{ checklist.title }}
        </a>
        <div>
          <button (click)="edit.emit(checklist)" data-testid="edit-checklist">
            Edit
          </button>
          <button
            (click)="delete.emit(checklist.id)"
            data-testid="delete-checklist"
          >
            Delete
          </button>
        </div>
      </li>
      } @empty {
        <p data-testid="no-checklists-message">
          Click the add button to create your first checklist!
        </p>
      }
    </ul>
  `,
  styles: [
    `
      ul {
        padding: 0;
        margin: 0;
      }
      li {
        font-size: 1.5em;
        display: flex;
        justify-content: space-between;
        background: var(--color-light);
        list-style-type: none;
        margin-bottom: 1rem;
        padding: 1rem;

        button {
          margin-left: 1rem;
        }
      }
    `
  ],
})
export class ChecklistListComponent {
  checklists = input.required<Checklist[]>();
  delete = output<string>();
  edit = output<Checklist>();
}
