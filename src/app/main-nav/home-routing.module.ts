import { NewbillComponent } from './newbill/newbill.component';
import { AdditemComponent } from './additem/additem.component';
import { AddstockComponent } from './addstock/addstock.component';
import { AuthGuard } from '../guards/auth-guard.service';

export const homeRoutes = [
  { path: '', redirectTo: 'newbill', pathMatch: 'full' },
  {path: 'newbill',component: NewbillComponent,canActivate:[AuthGuard]},
  {path: 'additem',component: AdditemComponent,canActivate:[AuthGuard]},
  {path: 'addstock',component: AddstockComponent,canActivate:[AuthGuard]},
];

