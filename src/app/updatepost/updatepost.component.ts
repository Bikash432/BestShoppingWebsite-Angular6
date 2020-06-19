import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product-service/product.service';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrls: ['./updatepost.component.css']
})
export class UpdatepostComponent implements OnInit {
  userId: string;
  id: number;
  title: string;
  body: string;
  emailId: string;
  status: boolean;
  errorMsg: string;

  constructor(private route: ActivatedRoute, private proservice: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.userId;
    this.id = this.route.snapshot.params.id;
    this.title = this.route.snapshot.params.tttle;
    this.body = this.route.snapshot.params.body;
  }
  updatePostGiven( body: string){
    this.proservice.updatePost(this.userId, this.id, this.title, this.body).subscribe(
      responseUpdateCartStatus => {
        this.status = responseUpdateCartStatus;
        if (this.status) {
          alert('Post  details updated successfully.');
          this.router.navigate(['/viewProducts']);

        }
        else {
          alert('Some error occured, please try after some time.');
        }
      },
      responseUpdateCartError => {
        this.errorMsg = responseUpdateCartError;
        console.log(this.errorMsg);
        alert('Some error occured, please try after some time.');
      },
      () => console.log('UpdatePost method executed successfully.')
    );
  }
}



