import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '../../../node_modules/@angular/core/src/view/provider';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() tick = new EventEmitter<{num: number}>();

clock = {};

 startTimer = function(clock) {
  let x = 1;
  clock.ticking = setInterval(() => {
    console.log('tick');
    this.tick.emit({
      num: x
    });
    x++;
  }, 500);
 };

 stopTimer = function(clock) {
   clearInterval(clock.ticking);
 };

  constructor() {
  }

  ngOnInit() {
  }

}
