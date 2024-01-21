
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReferenciaPipe } from '../../pipes/referencia.pipe';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { BooksComponent } from '../../pages/books/books.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReferenciaPipe, CommonModule, BooksComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {

  @Input() public booksList: Book[] = [];


  @Output() deleteBook = new EventEmitter<number>();

  public sendIdDeleteBook(id_book: number) {
    this.deleteBook.emit(id_book);
  }
}




// <!-- NOTAS MAS ABAJO PARA LA OPCION DE USAR VARIOS INPUTS, EL BUCLE ESTARÁ EN EL PADRE -->









// OPCION CON LOS INPUTS POR SEPARADO, EN ESTE CASO EL BUCLE
// TIENE QUE ESTAR EN BOOKS EN VEZ DE LA CARD

  // @Input() public img = "";
  // @Input() public title = "";
  // @Input() public author = "";
  // @Input() public type = "";
  // @Input() public id_book: number = 0;
  // @Input() public price: number = 0;

  // @Output() deleteBook = new EventEmitter<number>();

  // public sendIdDeleteBook(id_book: number) {
  //   this.deleteBook.emit(id_book);
  // }


// ESTA SERIA OPCION DE SACAR TODO EL LIBRO POR OUTPUT
// EN ESTE CASO EL BUCLE TIENE QUE ESTAR EN BOOKS EN VEZ DE LA CARD

  // @Output() eventoDeleteBook = new EventEmitter<Book>();

  // public sendIdDeleteBook() {
  //   const bookDeleted: Book = {
  //     id_book: this.id_book,
  //     id_user: 0,
  //     title: this.title,
  //     type: this.type,
  //     author: this.author,
  //     price: this.price,
  //     photo: this.img
  //   }
  //   console.log(bookDeleted);
  //   this.eventoDeleteBook.emit(bookDeleted);
  // }
