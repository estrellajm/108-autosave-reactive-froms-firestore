import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
    <app-form-component [company]="company"></app-form-component>
  `,
  styles: []
})
export class FormContainerComponent implements OnInit {
  company = 'test'
  constructor() { }

  ngOnInit() {

  }

}
