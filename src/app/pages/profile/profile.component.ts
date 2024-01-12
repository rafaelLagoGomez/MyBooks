import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  public user: User = {
    id_user: 1,
    name: "Rafael",
    last_name: "Lago Gómez",
    email: "rafaellago@nada.es",
    photo: "data:image/jpeg;base64,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",
    password: ""
  }

  public changeDataUser(inputName: HTMLInputElement, inputLastName: HTMLInputElement, inputEmail: HTMLInputElement, inputPhoto: HTMLInputElement) {
    console.log(inputName.value);
    this.user.name = inputName.value;
    this.user.last_name = inputLastName.value;
    this.user.email = inputEmail.value;
    this.user.photo = inputPhoto.value;
  }
}
