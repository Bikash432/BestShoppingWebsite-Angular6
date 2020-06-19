import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {UpdatepostComponent } from '../app/updatepost/updatepost.component';
import { GetallpostComponent } from '../app/getallpost/getallpost.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewProducts', component: GetallpostComponent},
  { path: 'updatePost/:userId/:id/:title/:body', component: UpdatepostComponent },
  { path: 'addPost/:userId/:id/:title/:body', component: AddComponent },
  { path: '**', component: HomeComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
