import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './add/add.component';

import { GetallpostComponent } from './getallpost/getallpost.component';


import { ProductService } from '../../src/product-service/product.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { UpdatepostComponent } from './updatepost/updatepost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    GetallpostComponent,
    HomeComponent,
    UpdatepostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
