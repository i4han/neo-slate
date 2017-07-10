import { Component } from '@angular/core';
import HL from 'htmlable'

@Component({
  selector: 'app',
  template: 
    HL('.window', 
      HL('md-toolbar', {color: 'primary'}, HL('app-header')  ),
      HL('.container', 
        HL('md-sidenav-container',
          HL('md-sidenav', {
              '#sidenav': null, 
              mode: 'side', 
              opened: true, 
              'md-is-locked-open': true, 
              flex:'', 
              style: 'background:lightgreen;'},
            HL('app-sidenav')),
          HL('.mat-content', { '#content': null }, HL('router-outlet'))  ),
        HL('.box-right', HL.SPAN('hello'), HL('.long-dot'))  ),      
      HL('.footer', HL('md-toolbar', {color: 'primary'}, HL('app-footer')))
  ).toHTML(),
  styles: [`
    .window {
      display: flex;
      flex-direction: column;
    }
    .container {
      display: flex;
      flex-direction: row;
    }
    .mat-sidenav-container {
      flex-grow: 2;
    }
    .mat-sidenav {
      display: flex;
      flex-direction: column;
      background: lightgrey;
      width: 300px;
      height: 100%;
    }
    .mat-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .mat-sidenav {
      display: flex;
      overflow: visible;
    }
    .mat-sidenav-content {
      display: flex;
      flex-direction: row;
    }
    .box-right {
      width: 240px;
    }
    .long-dot {
      padding-top: 240px;
      text-indent: 1000px;
    }
  `]
})
export class AppComponent {
  title = 'app'
}
