import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { StaffService } from '../../service/staff.service';
import Swal from 'sweetalert2'; // show messages
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/models/staff.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css']
})
export class StaffEditComponent implements OnInit {

  selectedFile: File = null;
   url:string = "http://localhost:3000/";
   addModelStaff: Staff;  /**variable que maneja la estructura de datos */
   editStaffForm: FormGroup; //**editStaffForm ---> FormGroup instance
   editStaffDetails:any={}; // to handle image

  //AddModel: any = {legalDocuments:[],image:[]};
  otherparam :string="";
  param :string="";
  element:any={};


  constructor(private StaffService: StaffService,
              private route: Router,
              private router:ActivatedRoute,
              public fb: FormBuilder,

              )

    {}

  ngOnInit(): void {


    this.updateStaffData();
    let id = this.router.snapshot.paramMap.get('id');
   // alert ("EStoy en Staff-edit.component, line 72,id - Staff:"+id)


    this.getStaffData(id);

    this.editStaffForm = this.fb.group({

      name:['', [Validators.required]],
      status:['', [Validators.required]],
      age: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      workArea: ['', [Validators.required]],
      address: ['', [Validators.required]],
      joinDate: ['', [Validators.required]],

})

 //**editStaffForm ---> FormGroup instance
 this.editStaffForm= this.fb.group({

  name: new FormControl(this. addModelStaff.name, [Validators.required,]),
  status: new FormControl(this.addModelStaff.status, [Validators.required,]),
  age: new FormControl(this.addModelStaff.age, [Validators.required,]),
  phoneNumber: new FormControl(this.addModelStaff.phoneNumber, [Validators.required,]),
  workArea: new FormControl(this.addModelStaff.workArea, [Validators.required,]),
  address: new FormControl(this.addModelStaff.address, [Validators.required,]),
  joinDate: new FormControl(this.addModelStaff.joinDate, [Validators.required,]),
})

}

// delete all field in form
updateStaffData(){

  this.editStaffForm = this.fb.group({
    name: ['', [Validators.required]],
    status: ['', [Validators.required]],
    age: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
    workArea: ['', [Validators.required]],
    address: ['', [Validators.required]],
    joinDate: ['', [Validators.required]],

  });
};



getStaffData(id: string): void {



  /*this.StaffService.getStaffById(id).subscribe({
                                                next: (data) => {*/
    this.StaffService.getStaffById(id).subscribe((data:any) => {

    this.editStaffForm.get('name').patchValue(data['name'],{onlySelf: true});
    this.editStaffForm.get('status').patchValue(data['status'],{onlySelf: true});
    this.editStaffForm.get('age').patchValue(data['age'],{onlySelf: true});
    this.editStaffForm.get('phoneNumber').patchValue(data['phoneNumber'],{onlySelf: true});
    this.editStaffForm.get('workArea').patchValue(data['workArea'],{onlySelf: true});
    this.editStaffForm.get('address').patchValue(data['address'],{onlySelf: true});
    this.editStaffForm.get('joinDate').patchValue(data['joinDate'],{onlySelf: true});


    this.param = data['image'];
    this.otherparam = data;


    }
  //error: (e) => console.error(e)

  )};


// Getter to access form control
get myForm() { return this.editStaffForm.controls;}



 /* changeImg = (e: any) => {
  for(let image of e.target.files) {}}*/

  changeImg(event:any) {this.selectedFile = event.target.files[0];}

    EditStaff(data:any){



      if (!this.editStaffForm.valid) {

    //    alert ("Estoy en EditForniture - line - 158 - !this.editForm.valid: "+!this.editStaffForm.valid)
        for (const control of Object.keys(this.editStaffForm.controls)) {
          this.editStaffForm.controls[control].markAsTouched();
        }

        return false;
      } else {

        if (window.confirm('Are you sure?')) {
          let id = this.router.snapshot.paramMap.get('id');

         alert ("Estoy en EditStaff - line - 174 -selectedFile:"+this.selectedFile)
         alert ("Estoy en EditStaff - line - 175 - id: "+id)
         alert ("Estoy en EditStaff - line - 176 - this.editForm.value: "+this.editStaffForm.value['name'])


      /*this.service.editAlbum(album, this.selectedFile, this.albumId).subscribe(response => {
        console.log(response);
        this.router.navigate(["/show/" + this.albumId]);
      });*/


          this.StaffService.editStaff(this.editStaffForm.value,this.selectedFile,id ).subscribe({
            complete: () => {

       //       alert ("Estoy en EditStaff - line - 176 - servicio completado ... !")

 // reset form: editStaffForm
 this.editStaffForm.reset();

              // to reload page - I go to another page and later to the one that I want To go
    this.route.navigateByUrl('/adminDashBoard', {skipLocationChange: true})// first I go to /admin
    .then(() => this.route.navigate(['/staffList'])); // then I go to /StaffList page

              Swal.fire('Content updated successfully!')
              //console.log('Content updated successfully!');
            },
            error: (e) => {
              console.log(e);
              alert ("Estoy en Staff-edit -line 197 - hubo error")
            },});}}}

}

