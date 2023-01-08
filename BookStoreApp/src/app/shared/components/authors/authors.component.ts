import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {

  @Output() myData = new EventEmitter<string>();

  @Input()
  set data(value: number) {
    this._data = value + 1;
  }
  get data(): number {
    return this._data;
  }
  private _data: number;

  public val: number;
  setData(n: number) {
    this.val = n;
  }

  @Input()
  show: boolean;

  /**
   *
   */
  constructor(private _testService: TestService) {
    

  }
  passData(): void {
    // this.myData.emit('This is from child using method');
    this._testService.myData = 'This is from child using service';
  }
}
