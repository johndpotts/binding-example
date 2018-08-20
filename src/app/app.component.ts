import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Game Control';
  odd = [];
  even = [];


  getEvens = function($event) {
    const num: number = $event.num;
    (num % 2 === 0) ? this.even.push(num) : this.odd.push(num);
    };
}
