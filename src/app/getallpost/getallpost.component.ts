import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-service/product.service';
import { Iproduct } from '../../product-interface/iproduct';
import { Router } from '@angular/router';


@Component({
  selector: 'app-getallpost',
  templateUrl: './getallpost.component.html',
  styleUrls: ['./getallpost.component.css']
})
export class GetallpostComponent implements OnInit {
  products: Iproduct[];
  errMsg: string;
  userRole: string;
  userName: string;
  status = false;
  errorMsg: string;
  constructor( private proservice: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.getProducts();
    }
    getProducts(){
      this.proservice.getProducts().subscribe(
        responseProductData => {
          this.products = responseProductData;
        }
      );
    }
    addPost(prod: Iproduct){
      this.route.navigate(['/addPost', prod.userId, prod.id, prod.title, prod.body]);
    }

    updatePost(prod: Iproduct) {
        this.route.navigate(['/updatePost', prod.userId, prod.id, prod.title, prod.body]);
      }
      deletePost(prod: Iproduct) {
       console.log(prod.id);
       if (confirm('are you sure you want to delete??')){
this.proservice.deletePost(prod.id).subscribe(res => {
  this.status = true;
  alert('successfully deleted');
  this.route.navigate(['/viewProducts']);
});
       }
      }
  }


