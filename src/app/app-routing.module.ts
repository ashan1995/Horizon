import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { userRoutes } from './user/user-routing.module';
import { homeRoutes } from './main-nav/home-routing.module';
import { AuthGuard } from './guards/auth-guard.service';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', component: UserComponent ,children:userRoutes},
  { path: 'home', component: MainNavComponent, children:homeRoutes,canActivate:[AuthGuard]}
];

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
