import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  prices: any[] = [
    { value: 100, viewValue: '100 $' }
  ];

  public model: BookModel;
  constructor(private _bookService: BookService) {

  }

  ngOnInit(): void {
    this.model = new BookModel();
    this.model.title = 'book';
    this.model.totalPages = 100;
    this.model.author = "authorrr";
    this.model.price = {
      value: 100,
      currency: "usd"
    };
    this.model.isPublished = true;
  }

  saveBook(value: any): void {
    console.log(value);

    const book: BookModel = new BookModel();
    book.title = value.title;
    book.author = value.author;
    book.totalPages = value.pages;
    book.price = {
      currency: "$",
      value: value.price
    };
    book.isPublished = value.isPublished;
    book.publishedOn = value.date;

    if (this.myForm.valid)
      this._bookService.addBook(book);
    else
      alert('ERROOOOORORORJIOGSDGSVDQSJSDQSNHOV')
  }
}
