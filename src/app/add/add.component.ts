import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product-service/product.service';
import { Iproduct } from '../../product-interface/iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productpost: Iproduct[];
  userId: string;
  id: number;
  title: string;
  body: string;
  emailId: string;
  status: boolean;
  errorMsg: string;

  constructor(private route: Router, private proservice: ProductService) { }

  ngOnInit(): void {
  }

  PosttheDetails(productpost: Iproduct[]){
    this.proservice.postthedetails(this.userId, this.id, this.title, this.body).subscribe(res => {
    this.status = true;
    alert('data successfully inserted');
    this.route.navigate(['/viewProducts']);
    });
  }

}
