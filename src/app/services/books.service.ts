import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  // A PARTIR DE AQUI SON LOS METODOS USANDO API EXPRESS EN VEZ DE LOS SERVICIOS 
  // AQUI LLAMAMOS A LOS ENDPOINTS DE LA API  (RETOS DE LA CLASE NODE4-OBSERVABLES)

  constructor(private http: HttpClient) { }
  private url: string = "http://localhost:3000"

  
  public getAllApi() {
    return this.http.get(`${this.url}/books`);
  }

  public getOneApi(id_book: number){
    return this.http.get(`${this.url}/books?id_book=${id_book}`);
    
  }

  public addApi(book: Book) {
    return this.http.post(`${this.url}/books`, book);
  }

  public updateApi(book: Book) {
    return this.http.put(`${this.url}/books?id_book=${book.id_book}`, book);
  }

  public deleteApi(id_book: number) {
    return this.http.delete(`${this.url}/books?id_book=${id_book}`);
  }








  // ARCHIVOS PARA CUANDO USAMOS EL SERVICE EN VEZ DE LA API

  // private books: Book [] = [
  //   {
  //     id_book: 1,
  //     id_user: 0,
  //     title: "Alas de Sangre",
  //     type: "Belic",
  //     author: "Rebecca Yarros",
  //     price: 21.75,
  //     photo: "https://imagessl0.casadellibro.com/a/l/s5/90/9788408279990.webp",
  //   } ,

  //   {
  //     id_book: 2,
  //     id_user: 0,
  //     title: "Maldita Roma",
  //     type: "Historic",
  //     author: "Santiago Posteguillo",
  //     price: 23.65,
  //     photo: "https://imagessl4.casadellibro.com/a/l/s5/64/9788466676564.webp",
  //   } ,

  //   {
  //     id_book: 3,
  //     id_user: 0,
  //     title: "La red Púpura",
  //     type: "Thriller",
  //     author: "Carmen Mola",
  //     price: 7.55,
  //     photo: "https://imagessl7.casadellibro.com/a/l/s5/97/9788466372497.webp",
  //   } ,

  //   {
  //     id_book: 4,
  //     id_user: 0,
  //     title: "La armadura luz",
  //     type: "Historic",
  //     author: "Ken Follett",
  //     price: 23.65,
  //     photo: "https://imagessl0.casadellibro.com/a/l/s5/30/9788401030130.webp",
  //   } 
  // ];


  // public getAll(): Book[] {
  //   return this.books;
  // }


  // Para que solo tenga que usar una variable en el controlador books
  // aquí vamos a crear el método de getOne para que siempre me devuelva
  // un array, o vacio o de 1 libro, así no da error el tipado
  // El metodo getOne siempre me  va devolver un array.
  
  // public getOne(id_book: number): Book[] | [] {
  //   const book = this.books.find(book => book.id_book === id_book);
  //   if(book) {
  //     return [book]
  //   } else {
  //     return [];
  //   }
  // }

  
  // public add(newBooks: Book): void {
  //   this.books.push(newBooks);
  // }


  // public delete(id_book: number) {
  //   const indexBook = this.books.findIndex(book => book.id_book === id_book);
  //   this.books.splice(indexBook,1);
  // }


  // public edit(book: Book) {
  //   const indexBook = this.books.findIndex(editbook=> editbook.id_book === book.id_book);
  //   this.books[indexBook] = book;
  // }
}
