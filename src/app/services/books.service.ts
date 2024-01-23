import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book [] = [
    {
      id_book: 1,
      id_user: 0,
      title: "Alas de Sangre",
      type: "Belic",
      author: "Rebecca Yarros",
      price: 21.75,
      photo: "https://imagessl0.casadellibro.com/a/l/s5/90/9788408279990.webp",
    } ,

    {
      id_book: 2,
      id_user: 0,
      title: "Maldita Roma",
      type: "Historic",
      author: "Santiago Posteguillo",
      price: 23.65,
      photo: "https://imagessl4.casadellibro.com/a/l/s5/64/9788466676564.webp",
    } ,

    {
      id_book: 3,
      id_user: 0,
      title: "La red Púpura",
      type: "Thriller",
      author: "Carmen Mola",
      price: 7.55,
      photo: "https://imagessl7.casadellibro.com/a/l/s5/97/9788466372497.webp",
    } ,

    {
      id_book: 4,
      id_user: 0,
      title: "La armadura luz",
      type: "Historic",
      author: "Ken Follett",
      price: 23.65,
      photo: "https://imagessl0.casadellibro.com/a/l/s5/30/9788401030130.webp",
    } 
  ];


  public getAll(): Book[] {
    return this.books;
  }


  public getOne(id_book: number): Book | undefined {
    return this.books.find(book => book.id_book === id_book);
  }

  
  public add(newBooks: Book): void {
    this.books.push(newBooks);
  }


  public delete(id_book: number) {
    const indexBook = this.books.findIndex(book => book.id_book === id_book);
    this.books.splice(indexBook,1);
  }


  public edit(book: Book) {
    const indexBook = this.books.findIndex(editbook=> editbook.id_book === book.id_book);
    this.books[indexBook] = book;
  }


  constructor() { }
}
