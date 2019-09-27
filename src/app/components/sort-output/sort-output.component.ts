import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-output',
  templateUrl: './sort-output.component.html',
  styleUrls: ['./sort-output.component.css']
})
export class SortOutputComponent implements OnInit {

  @Input() values: number[];

  constructor() { }

  ngOnInit() {
  }

}
