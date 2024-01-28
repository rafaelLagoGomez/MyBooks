import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BooksComponent } from './pages/books/books.component';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "register", component: RegisterComponent},
    {path: "profile", component: ProfileComponent},
    {path: "books", component: BooksComponent},
    {path: "addbook", component: AddbookComponent},
    {path: "updatebook", component: UpdatebookComponent},
    {path: "login", component: LoginComponent},

];
