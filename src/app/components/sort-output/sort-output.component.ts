import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sort-output',
  templateUrl: './sort-output.component.html',
  styleUrls: ['./sort-output.component.css']
})

export class SortOutputComponent {

  @Input() values: number[];

  constructor() {
  }

}
