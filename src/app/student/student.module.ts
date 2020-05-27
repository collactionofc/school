import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StudentComponent} from './student.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {SharedModule} from './../comman/shared.module';



const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'add', component: AddstudentComponent },
  { path: '**',redirectTo:'' },

];

@NgModule({
  declarations: [
    StudentComponent,
    AddstudentComponent
     
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StudentModule { }



