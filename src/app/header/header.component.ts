import { Component, OnInit } from '@angular/core';
import HL from 'htmlable'

@Component({
  selector: 'app-header',
  template: 
    HL.toHTML([
      HL.SPAN('Feature'),
      HL.SPAN('Study'),
      HL.SPAN({class: 'fill-space'}),
      HL.SPAN('+') ]),
  styles: [`
    :host {
      display: flex;
      width: 100%;
    }
    .fill-space {
      flex: 1 0 auto;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
