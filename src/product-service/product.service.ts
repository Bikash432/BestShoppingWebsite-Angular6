import { Injectable } from '@angular/core';
import {  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Iproduct } from '../../src/product-interface/iproduct';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Iproduct[];

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Iproduct[]> {
    const tempVar = this.http.get<Iproduct[]>('https://jsonplaceholder.typicode.com/posts');
    return tempVar;
  }
  updatePost(UserId: string, Id: number, Title: string, Body: string ): Observable<boolean> {
    let cartObj: Iproduct;
    cartObj = { userId: UserId, id: Id, title: Title, body: Body };
    return this.http.put<boolean>('https://jsonplaceholder.typicode.com/posts' + '/' + Id, cartObj);
  }

  deletePost(id: number){
    return this.http.delete('https://jsonplaceholder.typicode.com' + '/posts/' + id);
  }
  postthedetails(UserId: string, Id: number, Title: string, Body: string ): Observable<boolean> {
    let cartObj: Iproduct;
    cartObj = { userId: UserId, id: Id, title: Title, body: Body };
    return this.http.post<boolean>('https://jsonplaceholder.typicode.com/posts', cartObj);

  }

}
