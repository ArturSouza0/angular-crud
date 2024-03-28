import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]',
  standalone: true
})
export class ForDirective implements OnInit {

  @Input('myForEm')
  numbers: number[] = [];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.numbers)
  }

}