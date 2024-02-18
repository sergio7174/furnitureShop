import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/****import components  *****/


import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';
import { AdmincheckComponent } from './admin/admincheck/admincheck.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
//import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { FurnitureCreateComponent } from './admin/furniture-create/furniture-create.component';
import { FurnitureListComponent } from './admin/furniture-list/furniture-list.component';
import { FurnitureEditComponent } from './admin/furniture-edit/furniture-edit.component';
import { StaffCreateComponent } from './admin/staff/staff-create/staff-create.component';
import { StaffListComponent } from './admin/staff/staff-list/staff-list.component';
import { StaffEditComponent } from './admin/staff/staff-edit/staff-edit.component';
import { UserCreateComponent } from './admin/user/user-create/user-create.component';
import { UserListComponent } from './admin/user/user-list/user-list.component';
import { FurnitureListNAComponent } from './furniture/furniture-list-na/furniture-list-na.component';
import { FurnitureViewNAComponent } from './furniture/furniture-view-na/furniture-view-na.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'admincheck',component:AdmincheckComponent},
  {path:'adminDashBoard',component:AdmindashboardComponent},

  {path:'homeadmin',component:  HomeadminComponent},
  {path:'furnitureCreate',component:  FurnitureCreateComponent },
  {path:'furnitureList',component:  FurnitureListComponent,
                        runGuardsAndResolvers: 'always', },
  {path:'funitureEdit/:id',component:  FurnitureEditComponent },
  {path:'staffCreate',component:  StaffCreateComponent },
  {path:'staffList',component:  StaffListComponent,
                        runGuardsAndResolvers: 'always', },

  {path:'staffEdit/:id',component:  StaffEditComponent },
  {path:'userCreate',component:  UserCreateComponent },
  {path:'userList',component:  UserListComponent,
                        runGuardsAndResolvers: 'always', },
  {path:'furnitureListNA',component:  FurnitureListNAComponent,
                        runGuardsAndResolvers: 'always', },
  {path:'furnitureView/:id',component:  FurnitureViewNAComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
