import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--        <app-navlogo></app-navlogo>-->
    <router-outlet></router-outlet>
    <!--        <app-myprojects></app-myprojects>-->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioRafael';
}
