
import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { ReferenciaPipe } from '../../pipes/referencia.pipe';
import { CardComponent } from '../../components/card/card.component';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ReferenciaPipe, CardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent {

  public books: Book [] = [];

  public textWarning: string = "";

   
  constructor (private readonly booksService: BooksService) {}


  ngOnInit() {
    this.books = this.booksService.getAll()
    this.textWarning = "Vaya! Parece que no tienes ningún libro añadido."
  }


  public findBook(inputId: HTMLInputElement) {
    if(inputId.value === "") {
      this.books = this.booksService.getAll()
      this.textWarning = "Vaya! Parece que no tienes ningún libro añadido."
    } else { 
      this.books = this.booksService.getOne(Number(inputId.value));
      this.textWarning = "Vaya! Ese nº de referencia no existe."
    } 
  }


  public bookToDelete(id_book: number) {
    this.booksService.delete(id_book);
  }
}










// Ver video de clase de Jorge por si queremos hacerlo con la opcion de que un input nos 
// muestre el usuario/libro en concreto sin que se borre la lista, o que si no 
// existe ese id nos lance mensaje de que "no hay libro con ese id"
//     Esto dentro del findbook:
    // if(book) {
    //   this.findedBook = book;
    //   this.noBook =  "";
    // } else {
    //   this.findedBook = undefined;
    //   this.noBook = "No se ha encontrado ningún libro con ese Nº de Referencia";
    // }









// <!-- CLASE ANGULAR4 -->

// <!-- NOTAS MAS ABAJO PARA LA OPCION DE USAR VARIOS INPUTS, EL BUCLE ESTARÁ EN EL PADRE -->


// SI USAMOS LA OPCION DE VARIOS INPUTS, ESTE METODO QUEDARIA IGUAL

  // public bookDeleted(book.id_book: number) {
  //   const indexBook = this.books.findIndex(book => book.id_book === book.id_book);
  //   this.books.splice(indexBook,1);
  // }
  


// hay dos opciones para borrar la card del libro , con find o con filter.
// con find hay que buscar que posicion tiene el id que recibimos y 
// borrar con splice el elemento de esa posición.
// con filter pediriamos que filtre y nos de el array que NO con contenga
// el id recibido, así queda eliminado.
  

