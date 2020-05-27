import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TecherComponent} from './techer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtecherComponent } from './addtecher/addtecher.component';
import {SharedModule} from '../comman/shared.module';


const routes: Routes = [
  { path: '', component: TecherComponent },
  
  { path: 'add', component: AddtecherComponent},
  { path: '**',redirectTo:'' },
  // { path: 'component3', component: Component3Component },
];

@NgModule({
  declarations: [
    TecherComponent,
    AddtecherComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class TecherModule { }
