import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  public reactiveForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    photo: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  });


  public registerSubmit(): void {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm)
    // reviso si los inputs capturan con el console.log
  }

}
