import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FurnitureService } from '../service/furniture.service';
import { Furniture } from 'src/app/models/furniture.model';

const FURNITURE_DATA: Furniture[] = [];

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})



export class FurnitureListComponent implements OnInit  {
  url = "http://localhost:3000/";
  param:any="";
  Data:any = [];
  constructor(private furnitureService: FurnitureService,
              private route: Router,
              private router:ActivatedRoute)

              {}



  ngOnInit(): void { this.getFurnitureDetails(); }


  dataSource = FURNITURE_DATA;




  getFurnitureDetails() {
  //call to backend
  this.furnitureService.getFurnitureList().subscribe((res:any) => {

 this.dataSource = res;

  })}

editDetails(id:any){


  this.route.navigate(['/funitureEdit',id]);
}

deleteDetails (Data:any,index:any,event:any) {
  event.preventDefault();

  this.furnitureService.deleteFurniture(Data._id).subscribe((data) => {
    this.Data.splice(index, 1);

    // to reload page - I go to another page and later to the one that I want To go
    this.route.navigateByUrl('/adminDashBoard', {skipLocationChange: true})// first I go to /admin
      .then(() => this.route.navigate(['/furnitureList'])); // then I go to /furnitureList page

    return;
})}

back() {this.route.navigate(['/adminDashBoard'],)}

}
