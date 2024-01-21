
import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { ReferenciaPipe } from '../../pipes/referencia.pipe';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ReferenciaPipe, CardComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})

export class BooksComponent {
  public books: Book [] = [
    {
      id_book: 0,
      id_user: 0,
      title: "Alas de Sangre",
      type: "Belic",
      author: "Rebecca Yarros",
      price: 21.75,
      photo: "https://imagessl0.casadellibro.com/a/l/s5/90/9788408279990.webp",
    } ,

    {
      id_book: 1,
      id_user: 0,
      title: "Maldita Rom",
      type: "Historic",
      author: "Santiago Posteguillo",
      price: 23.65,
      photo: "https://imagessl4.casadellibro.com/a/l/s5/64/9788466676564.webp",
    } ,

    {
      id_book: 2,
      id_user: 0,
      title: "La red Púpura",
      type: "Thriller",
      author: "Carmen Mola",
      price: 7.55,
      photo: "https://imagessl7.casadellibro.com/a/l/s5/97/9788466372497.webp",
    } ,

    {
      id_book: 3,
      id_user: 0,
      title: "La armadura luz",
      type: "Historic",
      author: "Ken Follett",
      price: 23.65,
      photo: "https://imagessl0.casadellibro.com/a/l/s5/30/9788401030130.webp",
    } 
  ]
 
  
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
    this.books.push(newBooks);
  }
  

  public bookDeleted(id_book: number) {
    const indexBook = this.books.findIndex(book => book.id_book === id_book);
    this.books.splice(indexBook,1);
  }

}






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
  

