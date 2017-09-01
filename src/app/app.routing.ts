import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { Menu4Component } from './menu4/menu4.component';

import { HomeComponent } from './home/home.component';



const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'menu1', component: Menu1Component},
  {path: 'menu2', component: Menu2Component},
  {path: 'menu3', component: Menu3Component},
  {path: 'menu4', component: Menu4Component},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
