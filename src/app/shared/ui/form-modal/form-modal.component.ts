import { KeyValuePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  template: `
    <header>
      <h2>{{ title() }}</h2>
      <button (click)="close.emit()">close</button>
    </header>
    <section>
      <form [formGroup]="formGroup()" (ngSubmit)="save.emit(); close.emit()">
        @for (control of formGroup().controls | keyvalue; track control.key) {
          <div>
            <label [for]="control.key">{{ control.key }}</label>
            <input type="text" [id]="control.key" type="text" [formControlName]="control.key" />
          </div>
        }
        <button type="submit" data-testid="save-checklist-button">Save</button>
      </form>
    </section>
  `,
  styles: [
    `
      form {
        padding: 1rem;
      }

      div {
        display: flex;
        flex-direction: column;

        label {
          margin-bottom: 1rem;
          font-weight: bold;
        }

        input {
          font-size: 1.5rem;
          padding: 10px;
        }
      }

      section button {
        margin-top: 1rem;
        width: 100%;
      }
    `
  ],
  imports: [ReactiveFormsModule, KeyValuePipe],
})
export class FormModalComponent {
  formGroup = input.required<FormGroup>();
  title = input.required<string>();
  save = output();
  close = output();
}
