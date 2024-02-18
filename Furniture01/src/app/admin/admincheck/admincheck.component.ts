import { Component, OnInit, NgZone } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admincheck',
  templateUrl: './admincheck.component.html',
  styleUrls: ['./admincheck.component.css']
})
export class AdmincheckComponent implements OnInit {

 clave ="";
 claveAdmin = "Genesis";
 admincheckForm!: FormGroup;


  constructor(private ngZone: NgZone,
              private router: Router,) { }

  ngOnInit(): void {
  }


  navigationExtra = {queryParams: {Admin: true}}
admincheck(event:any):void{



  if (this.clave==""){
                            Swal.fire('Enter Admin Password, please ...');
                             return;}
  if (this.clave!=this.claveAdmin){
                                    Swal.fire('Wrong Password, Try Again');
                                    return;}


  if (this.clave==this.claveAdmin){

         Swal.fire('Password Mach, going to AdminDashBoard ..');

         this.ngZone.run(() => this.router.navigateByUrl('/adminDashBoard'), this.navigationExtra );



        }

}



}
