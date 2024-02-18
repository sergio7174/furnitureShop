import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StaffService } from '../../service/staff.service';
import { Staff } from 'src/app/models/staff.model';

const Staff_DATA: Staff[] = [];

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  url = "http://localhost:3000/";
  param:any="";
  Data:any = [];
  constructor(private staffService: StaffService,
              private route: Router,
              private router:ActivatedRoute)

              {}



  ngOnInit(): void { this.getStaffDetails(); }


  dataSource = Staff_DATA;




  getStaffDetails() {
  //call to backend
  this.staffService.getStaffList().subscribe((res:any) => {

 this.dataSource = res;

  })}

editDetails(id:any){


  this.route.navigate(['/staffEdit',id]);
}

deleteDetails (Data:any,index:any,event:any) {
  event.preventDefault();

  this.staffService.deleteStaff(Data._id).subscribe((data) => {
    this.Data.splice(index, 1);

    // to reload page - I go to another page and later to the one that I want To go
    this.route.navigateByUrl('/adminDashBoard', {skipLocationChange: true})// first I go to /admin
      .then(() => this.route.navigate(['/staffList'])); // then I go to /furnitureList page

    return;
})}

back() {this.route.navigate(['/adminDashBoard'],)}


}
