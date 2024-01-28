import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login-reactive.component.html',
  styleUrl: './form-login-reactive.component.css'
})
export class FormLoginReactiveComponent {

  public reactiveForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(5)])
  });


  public reactiveSubmit(): void {
    console.log(this.reactiveForm.value)
    console.log(this.reactiveForm)
    // reviso si los inputs capturan con el console.log
  }

}
