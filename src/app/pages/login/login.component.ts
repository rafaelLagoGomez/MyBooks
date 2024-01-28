import { Component } from '@angular/core';
import { FormLoginTemplateComponent } from '../../components/form-login-template/form-login-template.component';
import { FormLoginReactiveComponent } from '../../components/form-login-reactive/form-login-reactive.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginTemplateComponent, FormLoginReactiveComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
