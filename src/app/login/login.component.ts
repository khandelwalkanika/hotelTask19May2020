import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginCred } from './login.model';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  creds ={
    username : 'user1',
    password : '1234'
  }
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(!form.valid){
        return;
    }

    const username=form.value.username;
    const password=form.value.password;
    if(username === this.creds.username && password === this.creds.password) {
      console.log('Loggen id..yay!!');
      this.router.navigate(['hotels']);
    }
   

    console.log(form);
    form.reset();
}
}
