import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {

   }

  ngOnInit(): void {
  }
  submitLoginForm(form: NgForm)
  {
    if ((form.value.email === 'bikash@gmail.com') && (form.value.password === 'bikash@123'))
    {
this.route.navigate(['/viewProducts']);
    }
    else{
      alert('username and password did not match');
    }
  }
}
