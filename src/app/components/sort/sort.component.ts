import {Component} from '@angular/core';
import {Sort} from '../../classes/sort';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {

  public text = '';
  public values: number[];

  constructor() {
  }

  updateInput(text: string): void {
    this.text = text;
  }

  onClickExecuteSort(): void {
    const sort: Sort = new Sort();
    this.values = sort.parse(this.text);
    const error = sort.validate(this.values);
    if (error.length > 0) {
      alert(error);
    }
    this.values = sort.sort(this.values);
  }

}
