import { Component, OnInit } from '@angular/core';
import {Sort} from '../../classes/sort';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  public text = '';
  public values: number[];

  constructor() { }

  ngOnInit() {
  }

  updateInput(text: string) {
    this.text = text;
  }

  onClickExecuteSort() {
    const sort: Sort = new Sort();
    this.values = sort.parse(this.text);
    const error = sort.validate(this.values);
    if (error.length > 0) {
        alert(error);
    }
    this.values = sort.sort(this.values);
  }

}
