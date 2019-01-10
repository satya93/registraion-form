import { Component, OnInit, Inject } from '@angular/core';
 
 import {Http} from '@angular/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

   
  constructor(@Inject(Http) public rs) { }

  

  ngOnInit() {

   }

   t1;t2;t3;t4;t5;t6;t7
   funins(){
     var obj={uname:this.t1,city:this.t2}
     this.rs.post("insrec",obj).subscribe(dt=>{
       alert(dt._body)

       this.t1=""
       this.t2=""
       this.t3=""
       this.t4=""
       this.t5=""
       this.t6=""
       this.t7=""

     })

  
    }
  
}
