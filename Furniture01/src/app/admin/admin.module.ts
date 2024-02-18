import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdmincheckComponent } from './admincheck/admincheck.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { Routes, RouterModule } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { NavadmindashboardComponent } from './navadmindashboard/navadmindashboard.component';
import { HomeadminComponent } from './homeadmin/homeadmin.component';
import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureEditComponent } from './furniture-edit/furniture-edit.component';

import { StaffCreateComponent } from './staff/staff-create/staff-create.component';
import { StaffListComponent } from './staff/staff-list/staff-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { StaffEditComponent } from './staff/staff-edit/staff-edit.component';




@NgModule({
  declarations: [

    AdmincheckComponent,
    AdmindashboardComponent,

    NavadmindashboardComponent,
    HomeadminComponent,
    FurnitureCreateComponent,
    FurnitureListComponent,
    FurnitureEditComponent,

    StaffCreateComponent,
    StaffListComponent,
    UserListComponent,
    UserCreateComponent,
    StaffEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,



    CoreModule,
  ],
  exports: [
    AdmincheckComponent,
    AdmindashboardComponent,
  
    NavadmindashboardComponent,
    HomeadminComponent,
    FurnitureCreateComponent,
    FurnitureListComponent,
    FurnitureEditComponent,

    StaffCreateComponent,
    StaffListComponent,
    UserListComponent,
    UserCreateComponent,
    StaffEditComponent
  ]
})
export class AdminModule { }
