import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports: [
    ContactusComponent
  ]
})
export class ContactusModule { }
