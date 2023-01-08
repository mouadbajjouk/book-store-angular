import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn": "root"
})
export class BookService {

  // private allBooks = [
  //   {
  //     "id": 1,
  //     "title": "test1",
  //     "totalPages": 456,
  //     "author": "aut1",
  //     "price": {
  //       "currency": "usd",
  //       "value": 191
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "title": "test2",
  //     "totalPages": 356,
  //     "author": "aut2",
  //     "price": {
  //       "currency": "usd",
  //       "value": 98
  //     }
  //   },
  //   {
  //     "id": 3,
  //     "title": "test3",
  //     "totalPages": 189,
  //     "author": "aut3",
  //     "price": {
  //       "currency": "usd",
  //       "value": 102
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "title": "test3",
  //     "totalPages": 189,
  //     "author": "aut3",
  //     "price": {
  //       "currency": "usd",
  //       "value": 102
  //     }
  //   },
  //   {
  //     "id": 5,
  //     "title": "test3",
  //     "totalPages": 189,
  //     "author": "aut3",
  //     "price": {
  //       "currency": "usd",
  //       "value": 102
  //     }
  //   },
  //   {
  //     "id": 6,
  //     "title": "test3",
  //     "totalPages": 189,
  //     "author": "aut3",
  //     "price": {
  //       "currency": "usd",
  //       "value": 102
  //     }
  //   }
  // ];
  constructor(private _httpClient: HttpClient) { }

  public addBook(bookModel: BookModel): Observable<BookModel> {
    //this.allBooks.push(bookModel);
    //this._httpClient.post()
    return this._httpClient.post<BookModel>('https://localhost:44391/api/books', bookModel);

  }

  getBooks(): Observable<BookModel[]> {
    //return this.allBooks;
    return this._httpClient.get<BookModel[]>('https://localhost:44391/api/books');
  }

  // getRecentBooks(): any[] {
  //   return [
  //     {
  //       "id": 1,
  //       "title": "test1",
  //       "totalPages": 456,
  //       "author": "aut1",
  //       "price": {
  //         "currency": "usd",
  //         "value": 191
  //       }
  //     },
  //     {
  //       "id": 2,
  //       "title": "test2",
  //       "totalPages": 356,
  //       "author": "aut2",
  //       "price": {
  //         "currency": "usd",
  //         "value": 98
  //       }
  //     }
  //   ]
  // }
}
