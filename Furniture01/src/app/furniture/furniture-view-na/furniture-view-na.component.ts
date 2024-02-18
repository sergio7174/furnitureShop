import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { FurnitureService } from '../../admin/service/furniture.service';
import Swal from 'sweetalert2'; // show messages
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/models/furniture.model';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-furniture-view-na',
  templateUrl: './furniture-view-na.component.html',
  styleUrls: ['./furniture-view-na.component.css']
})
export class FurnitureViewNAComponent implements OnInit {

  selectedFile: File = null;
   url:string = "http://localhost:3000/";
   addModelFurniture: Furniture;  /**variable que maneja la estructura de datos */
   editFurnitureForm: FormGroup; //**editFurnitureForm ---> FormGroup instance
   editFurnitureDetails:any={}; // to handle image

  //AddModel: any = {legalDocuments:[],image:[]};
  otherparam :string="";
  param :string="";
  element:any={};


  constructor(private furnitureService: FurnitureService,
              private route: Router,
              private router:ActivatedRoute,
              public fb: FormBuilder,

              )

    {}

  ngOnInit(): void {


    this.updateFurnitureData();
    let id = this.router.snapshot.paramMap.get('id');
   // alert ("EStoy en furniture-edit.component, line 72,id - furniture:"+id)


    this.getFurnitureData(id);

    this.editFurnitureForm = this.fb.group({

      name:['', [Validators.required]],
      price:['', [Validators.required]],
      discount: ['', [Validators.required]],
      color: ['', [Validators.required]],
      avalibleCount: ['', [Validators.required]],
      description: ['', [Validators.required]],

})



 //**editFurnitureForm ---> FormGroup instance
 this.editFurnitureForm= this.fb.group({

  name: new FormControl(this. addModelFurniture.name, [Validators.required,]),
  price: new FormControl(this.addModelFurniture.price, [Validators.required,]),
  discount: new FormControl(this.addModelFurniture.discount, [Validators.required,]),
  color: new FormControl(this.addModelFurniture.color, [Validators.required,]),
  avalibleCount: new FormControl(this.addModelFurniture.avalibleCount, [Validators.required,]),

  description: new FormControl(this.addModelFurniture.description, [Validators.required,]),})

}

// delete all field in form
updateFurnitureData(){

  this.editFurnitureForm = this.fb.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    discount: ['', [Validators.required]],
    color: ['', [Validators.required]],
    avalibleCount: ['', [Validators.required]],
    description: ['', [Validators.required]],

  });
};



getFurnitureData(id: string): void {



  /*this.furnitureService.getFurnitureById(id).subscribe({
                                                next: (data) => {*/
    this.furnitureService.getFurnitureById(id).subscribe((data:any) => {

    this.editFurnitureForm.get('name').patchValue(data['name'],{onlySelf: true});
    this.editFurnitureForm.get('price').patchValue(data['price'],{onlySelf: true});
    this.editFurnitureForm.get('discount').patchValue(data['discount'],{onlySelf: true});
    this.editFurnitureForm.get('color').patchValue(data['color'],{onlySelf: true});
    this.editFurnitureForm.get('avalibleCount').patchValue(data['avalibleCount'],{onlySelf: true});
    this.editFurnitureForm.get('description').patchValue(data['description'],{onlySelf: true});


    this.param = data['image'];
    this.otherparam = data;


    }
  //error: (e) => console.error(e)

  )};
// Getter to access form control
get myForm() { return this.editFurnitureForm.controls;}

back() {this.route.navigate(['/furnitureListNA'],)}


}
