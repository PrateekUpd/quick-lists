import { Component } from "@angular/core";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <header>
      <h1>Quicklists</h1>
    </header>
    <section>
      <h2>Your checklists</h2>


    </section>
  `,
  imports: [],
})
export default class HomeComponent {

  constructor() { }

}
