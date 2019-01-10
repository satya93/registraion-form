import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(@Inject(Router) public rt, @Inject(Http) public ry) {
     
    }

  ngOnInit() {
  }
   name(event){
     console.log(event)
   }

}
