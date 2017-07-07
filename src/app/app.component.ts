import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    Hello!
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'app';
}
