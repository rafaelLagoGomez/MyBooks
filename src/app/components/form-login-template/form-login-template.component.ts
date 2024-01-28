import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'app-form-login-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login-template.component.html',
  styleUrl: './form-login-template.component.css'
})
export class FormLoginTemplateComponent {

  public user: User;

  constructor() {
    this.user = new User();
  }

  public submit(form: NgForm) {
    console.log(form);
    console.log(this.user);
    // reviso si los inputs capturan con el console.log
  }
}
