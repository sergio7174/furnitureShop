import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FurnitureService } from '../service/furniture.service';
import Swal from 'sweetalert2'; // show messages
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/models/furniture.model';

@Component({
  selector: 'app-furniture-create',
  templateUrl: './furniture-create.component.html',
  styleUrls: ['./furniture-create.component.css']
})
export class FurnitureCreateComponent implements OnInit {

   /********** trying to save image new procedure */

   selectedFile: File = null;
   /***************end block new procedure ****** */

  reactiveFurnitureForm!: FormGroup;
  addModelFurniture: Furniture;  /**variable que maneja la estructura de datos del modelo*/
  AddModel: any = {image:[]};




           constructor(private furnitureService: FurnitureService,
                       private route: Router)
                       {this.addModelFurniture = {} as Furniture }

  ngOnInit(): void {

               // driving the reactiveFurnitureForm
    this.reactiveFurnitureForm = new FormGroup({

      name: new FormControl(this.addModelFurniture.name, [Validators.required,]),
      price: new FormControl(this.addModelFurniture.price, [Validators.required,]),
      discount: new FormControl(this.addModelFurniture.discount, [Validators.required,]),
      color: new FormControl(this.addModelFurniture.color, [Validators.required,]),
      avalibleCount: new FormControl(this.addModelFurniture.avalibleCount, [Validators.required,]),
      description: new FormControl(this.addModelFurniture.description, [Validators.required,]),
      image: new FormControl(this.selectedFile, [Validators.required,]),})

      this.reactiveFurnitureForm.reset();}

  get name() {return this.reactiveFurnitureForm.get('name')!;} /**function to get name */
  get price() {return this.reactiveFurnitureForm.get('price')!;} /**function to get price */
  get discount() {return this.reactiveFurnitureForm.get('discount')!;} /**function to get discount */
  get color() {return this.reactiveFurnitureForm.get('color')!;} /**function to get color */
  get avalibleCount() {return this.reactiveFurnitureForm.get('avalibleCount')!;} /**function to get avalibleCount */
  get description() {return this.reactiveFurnitureForm.get('description')!;} /**function to get description */


  back() {this.route.navigate(['/homeadmin'],)}

  changeImg(event) {this.selectedFile = event.target.files[0];

    /*alert ("Estoy en create-album.component - line 60 - this.selectedFile name:" + this.selectedFile['name']);
  alert ("Estoy en create-album.component - line 61 - this.selectedFile value:" + this.selectedFile['value'])*/}
  //this.AddModel.image.push(this.selectedFile)}





  AddFurniture(forniture:any) {
    /*****************adding by me ******************* */

       if (this.reactiveFurnitureForm.invalid) {
         for (const control of Object.keys(this.reactiveFurnitureForm.controls)) {
           this.reactiveFurnitureForm.controls[control].markAsTouched();
         }
         return;
       }

     // to saved the image - I have to use AddModel to save inf in database
       this.AddModel = this.reactiveFurnitureForm.value; /** se igualan los valores del objeto y los datos obtenidos */


       this.furnitureService.createFurniture( this.reactiveFurnitureForm.value, this.selectedFile).subscribe((res) =>
                   {Swal.fire('Furniture added successfully')
                             console.log(res)}, error => {console.log(error)},
                             () => {})
       console.log(this.AddModel)

       // reset form: reactiveFurnitureForm
       this.reactiveFurnitureForm.reset();

       // go to /furnitureCreate page
       this.route.navigate(['/furnitureCreate'],)
     }



}
