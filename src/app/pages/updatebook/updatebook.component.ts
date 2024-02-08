import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-updatebook',
  standalone: true,
  imports: [],
  templateUrl: './updatebook.component.html',
  styleUrl: './updatebook.component.css'
})
export class UpdatebookComponent {

  constructor (
    private readonly booksService: BooksService, private readonly router: Router) {}


  public updateBook(inputFoto: HTMLInputElement, inputTitulo: HTMLInputElement, inputAutor: HTMLInputElement, inputTipo: HTMLInputElement, inputPrecio: HTMLInputElement, inputCodigo: HTMLInputElement) {
    const updatedBook: Book = {
      id_book: parseFloat(inputCodigo.value),
      id_user: 0,
      title: inputTitulo.value,
      type: inputTipo.value,
      author: inputAutor.value,
      price: parseFloat(inputPrecio.value),
      photo: inputFoto.value
    }
    // this.booksService.edit(updatedBook);   -----> es cuando no hay API
    this.booksService.updateApi(updatedBook).subscribe((data) => {
      console.log(data);
    })
    this.router.navigateByUrl("/books");
  }
}
