import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StaffService } from '../../service/staff.service';
import Swal from 'sweetalert2'; // show messages
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from 'src/app/models/staff.model';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrls: ['./staff-create.component.css']
})
export class StaffCreateComponent implements OnInit {

   /********** trying to save image new procedure */

   selectedFile: File = null;
   /***************end block new procedure ****** */

  reactiveStaffForm!: FormGroup;
  AddModelStaff: Staff;  /**variable que maneja la estructura de datos del modelo*/
  AddModel: any = {image:[]};




           constructor(private staffService: StaffService,
                       private route: Router)
                       {this.AddModelStaff = {} as Staff }

  ngOnInit(): void {

               // driving the reactiveStaffForm
    this.reactiveStaffForm = new FormGroup({

      name: new FormControl(this.AddModelStaff.name, [Validators.required,]),
      status: new FormControl(this.AddModelStaff.status, [Validators.required,]),
      age: new FormControl(this.AddModelStaff.age, [Validators.required,]),
      phoneNumber: new FormControl(this.AddModelStaff.phoneNumber, [Validators.required,]),
      workArea: new FormControl(this.AddModelStaff.workArea, [Validators.required,]),
      address: new FormControl(this.AddModelStaff.address, [Validators.required,]),
      joinDate: new FormControl(this.AddModelStaff.joinDate, [Validators.required,]),

      image: new FormControl(this.selectedFile, [Validators.required,]),})

      this.reactiveStaffForm.reset();}




  get name() {return this.reactiveStaffForm.get('name')!;} /**function to get name */
  get status() {return this.reactiveStaffForm.get('status')!;} /**function to get status */
  get age() {return this.reactiveStaffForm.get('age')!;} /**function to get age */
  get phoneNumber() {return this.reactiveStaffForm.get('phoneNumber')!;} /**function to get phoneNumber */
  get workArea() {return this.reactiveStaffForm.get('workArea')!;} /**function to get workArea */
  get address() {return this.reactiveStaffForm.get('address')!;} /**function to get address */
  get joinDate() {return this.reactiveStaffForm.get('joinDate')!;} /**function to get JoinDate */

  back() {this.route.navigate(['/homeadmin'],)}

  changeImg(event) {this.selectedFile = event.target.files[0];}






  AddStaff(forniture:any) {
    /*****************adding by me ******************* */

       if (this.reactiveStaffForm.invalid) {
         for (const control of Object.keys(this.reactiveStaffForm.controls)) {
           this.reactiveStaffForm.controls[control].markAsTouched();
         }
         return;
       }

     // to saved the image - I have to use AddModel to save inf in database
       this.AddModel = this.reactiveStaffForm.value;
       /** se igualan los valores del objeto y los datos obtenidosStaff **/
        this.staffService.createStaff( this.reactiveStaffForm.value, this.selectedFile).subscribe((res) =>
                   {Swal.fire('Person added successfully')
                             console.log(res)}, error => {console.log(error)},
                             () => {})
       console.log(this.AddModel)

       // reset form: reactiveStaffForm
       this.reactiveStaffForm.reset();

       // go to /furnitureCreate page
       this.route.navigate(['/staffCreate'],)
     }



}

