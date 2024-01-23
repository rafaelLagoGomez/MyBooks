import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {

  constructor (
    private readonly booksService: BooksService, private readonly router: Router) {}


  public addNewBook(inputFoto: HTMLInputElement, inputTitulo: HTMLInputElement, inputAutor: HTMLInputElement, inputTipo: HTMLInputElement, inputPrecio: HTMLInputElement, inputCodigo: HTMLInputElement) {
    const newBooks: Book = {
      id_book: parseFloat(inputCodigo.value),
      id_user: 0,
      title: inputTitulo.value,
      type: inputTipo.value,
      author: inputAutor.value,
      price: parseFloat(inputPrecio.value),
      photo: inputFoto.value
    }
    this.booksService.add(newBooks)
    this.router.navigateByUrl("/books");
  }
}
