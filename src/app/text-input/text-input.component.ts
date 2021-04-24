import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() public name: string;
  @Input() public type: string = 'text';
  @Input() public size: 'regular' | 'large' = 'regular';

  constructor() { }

  ngOnInit(): void {
  }

}
