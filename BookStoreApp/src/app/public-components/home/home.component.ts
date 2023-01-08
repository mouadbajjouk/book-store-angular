import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { CounterService } from 'src/app/shared/services/counter.service';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('authors') private authors: AuthorsComponent;
  @ViewChild('counterBtn') private btn: MatButton;
  @ViewChild('title') private title: ElementRef;

  constructor(public _counterService: CounterService,
    @Inject('appTitle') public titleObj: any, public _testService: TestService) {
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.authors.setData(50);

      this.btn.color = 'primary';

      this.title.nativeElement.innerHTML = 'changefd title from after child init'
    }, 0);
  }

  public inc(): void { this._counterService.incCounter(); }
  public dec(): void { this._counterService.decCounter(); }

  getFromChild($event: any): void {
    console.log($event);
  }
}
