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

      image: new FormControl(this.AddModel.image),})


      
      this.reactiveFurnitureForm.reset();}

  get name() {return this.reactiveFurnitureForm.get('name')!;} /**function to get name */
  get price() {return this.reactiveFurnitureForm.get('price')!;} /**function to get price */
  get discount() {return this.reactiveFurnitureForm.get('discount')!;} /**function to get discount */
  get color() {return this.reactiveFurnitureForm.get('color')!;} /**function to get color */
  get avalibleCount() {return this.reactiveFurnitureForm.get('avalibleCount')!;} /**function to get avalibleCount */
  get description() {return this.reactiveFurnitureForm.get('description')!;} /**function to get description */


  back() {this.route.navigate(['/homeadmin'],)}

  AddFurniture() {
    /*****************adding by me ******************* */
       if (this.reactiveFurnitureForm.invalid) {
         for (const control of Object.keys(this.reactiveFurnitureForm.controls)) {
           this.reactiveFurnitureForm.controls[control].markAsTouched();
         }
         return;
       }

     // to saved the image - I have to use AddModel to save inf in database
       this.AddModel = this.reactiveFurnitureForm.value; /** se igualan los valores del objeto y los datos obtenidos */


       console.info('name:', this.addModelFurniture.name);
       console.info('price:', this.addModelFurniture.price);
       console.info('discount:', this.addModelFurniture.discount);
       console.info('Room No:', this.addModelFurniture.color);
       console.info('avalibleCount:', this.addModelFurniture.avalibleCount);
       console.info('description:', this.addModelFurniture.description);



   /*****************end block added by me ******************* */

       console.log(this.addModelFurniture)




       //this.furnitureService.postFurniture(this.AddModel).subscribe((res) => {
        this.furnitureService.createFurniture(this.AddModel, this.seletedFile).subscribe((res) => {

         Swal.fire('Furniture added successfully')
         console.log(res)
       }, error => {
         console.log(error)

       }, () => {

       })
       console.log(this.AddModel)

       this.reactiveFurnitureForm.reset();
       this.route.navigate(['/furnitureCreate'],)
     }

     getBase64 = (file: any) => new Promise(function (resolve: any, reject: any) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error: any) => reject('Error:', error);
    })

    /*changeImg = (e: any) => {
      for(let image of e.target.files) {

      const file = image
      let encoded;
      this.getBase64(file)
        .then((result) => {
          encoded = result;
          this.AddModel.image.push(result)

        })
        .catch(e => console.log(e))
    }
  }*/

}
