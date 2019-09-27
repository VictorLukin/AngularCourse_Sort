import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.css']
})
export class SortInputComponent {

  @Output() ready: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  onBlur(text: string): void {
    this.ready.emit(text);
  }
}
