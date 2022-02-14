import { Component } from '@angular/core';

@Component({
  selector: 'bch-root',
  template: `
    <router-outlet></router-outlet>
  `,
  host: { class: 'bch-root' },
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'benchLabs';
}
