import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> {{ title }} </h1>
    <p> You've clicked this button {{clickCount}} times </p>
    <p> New title: <input [(ngModel)]="newTitle"> </p>
    <button (click)="changeTitle()"> Change that title </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  clickCount = 0;
  newTitle = '';
  updateTitle() {}

  changeTitle(event) {
    this.title = 'You did it';
    this.clickCount = this.clickCount + 1;
    this.title = this.newTitle;  
  }
  textChange(event) {
    this.newTitle = event.target.value;
  }
}


