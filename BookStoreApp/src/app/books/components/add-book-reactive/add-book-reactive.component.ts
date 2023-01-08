import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {

  public titleErrorMessage: string = '';
  prices: any[] = [
    { value: 100, viewValue: '100' }
  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Dollar' }
  ];

  public addBookForm: FormGroup;


  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.initForm();

    // console.log(this.addBookForm.controls['title']);

    // console.log(this.addBookForm.get('title'));

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      //console.log(x);
      this.validateTitleControl(titleControl as FormControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType')?.valueChanges.subscribe(x => {
      this.formatTypeChanged(x);
    });
  }

  public get authors() {
    return <FormArray>this.addBookForm.get('authors');
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }

  public updateFormValues(): void {
    this.addBookForm.patchValue({
      title: 'Mouad baj',
      author: 'default'
    });
  }

  private initForm(): void {
    // this.addBookForm = new FormGroup({
    //   title: new FormControl('dummy title', [Validators.required, Validators.minLength(2)]),
    //   author: new FormControl(null, Validators.required),
    //   pages: new FormControl(),
    //   price: new FormGroup({
    //     currency: new FormControl(),
    //     value: new FormControl(),
    //   }),
    //   publishedOn: new FormControl(),
    //   isPublished: new FormControl(),
    //   formatType: new FormControl(),
    //   docFormat: new FormControl(),
    //   pdfFormat: new FormControl(),
    // });

    this.addBookForm = this._formBuilder.group({
      title: ['def title builder', [Validators.required, Validators.minLength(10)]],
      author: 'def auth',
      pages: '',
      price: this._formBuilder.group({
        currency: '',
        value: '',
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      docFormat: '',
      pdfFormat: '',
      authors: this._formBuilder.array([
        this.getAuthorControl(),
        this.getAuthorControl()

      ]),
    });

    // this.addBookForm.patchValue({
    //   title: 'Mouad'
    // });
  }

  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName: '',
    });
  }

  saveBook(): void {
    console.log(this.addBookForm.value);
    if (this.addBookForm.valid)
      this._bookService.addBook(this.addBookForm.value).subscribe(x=>{
        console.log(x);
        
      });

    else
      alert('ERROOOOORORORJIOGSDGSVDQSJSDQSNHOV')

    // const book: BookModel = new BookModel();
    // book.title = this.addBookForm.value.title;
    // book.author = value.author;
    // book.totalPages = value.pages;
    // book.price = {
    //   currency: "$",
    //   value: value.price
    // };
    // book.isPublished = value.isPublished;
    // book.publishedOn = value.date;

    // if (this.myForm.valid)
    //   this._bookService.addBook(book);
    // else
    //   alert('ERROOOOORORORJIOGSDGSVDQSJSDQSNHOV')
  }

  private validateTitleControl(titleControl: FormControl): void {
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.['required']) {
        this.titleErrorMessage = 'this is required field d'
      }
      else if (titleControl.errors?.['minlength']) {
        this.titleErrorMessage = 'min length is ' + titleControl.errors?.['minlength']?.requiredLength;
      }
    }
  }

  private formatTypeChanged(format: string): void {
    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if (format === 'pdf') {
      pdfControl?.addValidators([Validators.required, Validators.minLength(10)]);
      docControl?.clearValidators();
    }
    else if (format === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }
}
