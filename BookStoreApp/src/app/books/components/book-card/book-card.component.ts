import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input('allBooks') books: BookModel[]
  // set books(books: BookModel[]){
  //   books.map(m=>m.title = 'Title: ' + m.title);
  //   this._books = books;
  // }
  // get books(): BookModel[]
  // {
  //   return this._books;
  // }
  private _books: BookModel[];
}
