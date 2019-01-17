import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Routes,RouterModule } from '@angular/router';

export const userRoutes = [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login',component: LoginComponent},
      {path: 'signup',component: SignupComponent}
];



