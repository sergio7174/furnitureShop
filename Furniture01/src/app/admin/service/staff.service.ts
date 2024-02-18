import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


import { Staff} from '../../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  selectedStaff : Staff;
  staff : Staff[]; // mongo database data save this array
  readonly baseUrl ="http://localhost:3000/staff";
  readonly baseUrlPut ="http://localhost:3000/staff/";


  constructor(private http : HttpClient) { }



  postStaff(staffemp: Staff){return this.http.post(this.baseUrl,staffemp);}
  getStaffList(){return this.http.get(this.baseUrl);}

  putStaff(id:any,staffemp:Staff){return this.http.put(this.baseUrl +  `/${id}`,staffemp);}
  deleteStaff(_id:string){ return this.http.delete(this.baseUrl + `/${_id}`); }

//method to create a new staff
createStaff(staff:any, selectedFile:any): Observable<any> {

  const uploadData = new FormData();

  uploadData.append("name", staff.name);
  uploadData.append("status", staff.status);
  uploadData.append("age", staff.age);
  uploadData.append("phoneNumber", staff.phoneNumber);
  uploadData.append("workArea", staff.workArea);
  uploadData.append("address", staff.address);
  uploadData.append("joinDate", staff.joinDate);
  uploadData.append("image", selectedFile);

 return this.http.post(this.baseUrl, uploadData);}

 getStaffById(id:any){ return this.http.get(this.baseUrl+  `/${id}`)}

//method to edit an person staff
editStaff(staff, selectedFile, id): Observable<any> {

  const uploadData = new FormData();
  uploadData.append("name", staff.name);
  uploadData.append("status", staff.status);
  uploadData.append("age", staff.age);
  uploadData.append("phoneNumber", staff.phoneNumber);
  uploadData.append("workArea", staff.workArea);
  uploadData.append("address", staff.address);
  uploadData.append("joinDate", staff.joinDate);
  uploadData.append("image", selectedFile);

  alert ('Estoy en Staff service -line 48 - this.baseUrlPut+ id'+this.baseUrlPut+ id)
  return this.http.put(this.baseUrlPut+id, uploadData);
}



}
