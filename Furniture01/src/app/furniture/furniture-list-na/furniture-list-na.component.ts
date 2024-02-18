import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FurnitureService } from '../../admin/service/furniture.service';
import { Furniture } from 'src/app/models/furniture.model';

const FURNITURE_DATA: Furniture[] = [];

@Component({
  selector: 'app-furniture-list-na',
  templateUrl: './furniture-list-na.component.html',
  styleUrls: ['./furniture-list-na.component.css']
})
export class FurnitureListNAComponent implements OnInit {

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

editDetails(id:any){this.route.navigate(['/furnitureView',id]);}

back() {this.route.navigate(['/'],)}

}
