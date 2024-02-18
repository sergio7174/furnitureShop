import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {



  readonly baseUrl ="http://localhost:3000/furniture";
  readonly baseUrlPut ="http://localhost:3000/furniture/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http : HttpClient) { }

//method to create a new furniture
createFurniture(furniture:any, selectedFile:any): Observable<any> {

  const uploadData = new FormData();

  uploadData.append("name", furniture.name);
  uploadData.append("price", furniture.price);
  uploadData.append("discount", furniture.discount);
  uploadData.append("color", furniture.color);
  uploadData.append("avalibleCount", furniture.avalibleCount);
  uploadData.append("description", furniture.description);
  uploadData.append("image", selectedFile);

 return this.http.post(this.baseUrl, uploadData);}

//method to edit an furniture
editFurniture(furniture, selectedFile, id): Observable<any> {

  const uploadData = new FormData();
  uploadData.append("name", furniture.name);
  uploadData.append("price", furniture.price);
  uploadData.append("discount", furniture.discount);
  uploadData.append("color", furniture.color);
  uploadData.append("avalibleCount", furniture.avalibleCount);
  uploadData.append("description", furniture.description);
  uploadData.append("image", selectedFile);
  alert ('Estoy en furniture service -line 48 - this.baseUrlPut+ id'+this.baseUrlPut+ id)
  return this.http.put(this.baseUrlPut+id, uploadData);
}

 postFurniture(furnitureemp: any, selectedFile:any){
    alert ("This selectedFile:"+ selectedFile)
    return this.http.post(this.baseUrl,furnitureemp,
    );}


  getFurnitureList(){ return this.http.get(this.baseUrl)}

  getFurnitureById(id:any){ return this.http.get(this.baseUrl+  `/${id}`)}







  putFurniture(id:any,furnitureemp){return this.http.put(this.baseUrl +  `/${id}`,furnitureemp);}

  deleteFurniture(_id:string){return this.http.delete(this.baseUrl + `/${_id}`);  }



}
