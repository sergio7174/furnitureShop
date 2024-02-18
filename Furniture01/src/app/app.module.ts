import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/****import system modules ****/

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ContactusModule } from './contactus/contactus.module';
import { AdminModule } from './admin/admin.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FurnitureListNAComponent } from './furniture/furniture-list-na/furniture-list-na.component';
import { FurnitureViewNAComponent } from './furniture/furniture-view-na/furniture-view-na.component';

@NgModule({
  declarations: [
    AppComponent,
    FurnitureListNAComponent,
    FurnitureViewNAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,



    CoreModule,
    HomeModule,
    ContactusModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FurnitureListNAComponent,
    FurnitureViewNAComponent
  ]
})
export class AppModule { }
