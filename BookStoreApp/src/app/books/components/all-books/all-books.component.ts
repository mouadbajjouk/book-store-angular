import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/services/counter.service';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
})
export class AllBooksComponent implements OnInit {

  books: BookModel[] = [];

  constructor(public bookService: BookService, public _counterService: CounterService) { }

  public inc(): void { this._counterService.incCounter(); }
  public dec(): void { this._counterService.decCounter(); }

  ngOnInit(): void {
    // const allBooks = this.bookService.getBooks();

    // allBooks.forEach(b => {
    //   var obj = new BookModel();
    //   obj.id = b.id;
    //   obj.title = b.title;
    //   obj.author = b.author;
    //   obj.totalPages = b.totalPages;
    //   obj.price = b.price;
    //   obj.isPublished = b.isPublished;
    //   obj.publishedOn = b.publishedOn;
    //   this.books.push(obj);
    // });

    // console.log(this.books);
    this.getAllBooks();
  }

  private getAllBooks(): void
  {
    this.bookService.getBooks()
    .subscribe(books=> {
      this.books = books;
      
    });
  }
}
