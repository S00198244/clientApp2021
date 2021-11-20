import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Book } from './book'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dataUri = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  //ADD
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.dataUri, book)
      .pipe(
        catchError(this.handleError)
      )
  }

  //UPDATE
  updateBook(id: string, book: Book): Observable<Book> {
    console.log('subscribing to update' + id);
    let bookURI: string = this.dataUri + '/' + id;
    return this.http.put<Book>(bookURI, book)
      .pipe(
        catchError(this.handleError)
      )
  }

  //GET BOOKS
  getBooks(): Observable<Book[]>{
    console.log('get Books called');
    return this.http.get<Book[]>(`${this.dataUri}?limit=5`)
    .pipe(
      catchError(this.handleError)
    )
  }

  /** DELETE: delete the book from the server */
deleteBook(id: string): Observable<unknown> {
  const url = `${this.dataUri}/${id}`; // DELETE 
  return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
