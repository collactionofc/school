import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from '../app/menu/menu.component';
import {StudentComponent} from '../app/student/student.component';
import {TecherComponent} from '../app/techer/techer.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'student',
  loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  { path: 'techer',
  loadChildren: () => import('./techer/techer.module').then(m => m.TecherModule)
  },
  {path:'**',component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
