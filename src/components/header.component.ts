/**
 * Create By: Meng
 * Create Date: 2022-
 * Desc:
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>None</h1>
    <div class="none-message">
      <h1>No encapsulation</h1>
      <h1>No encapsulation</h1>
      <h1>No encapsulation</h1>
      <h1>No encapsulation</h1>
    </div>
  `,
  styles: ['h2, .none-message { color: red; z-index: 9999}'],
  // encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  title = 'header';
}
