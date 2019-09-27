import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.css']
})
export class SortInputComponent implements OnInit {

  @Output() ready: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onBlur(text: string) {
    this.ready.emit(text);
  }
}
