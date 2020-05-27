import { NgModule } from '@angular/core';
import {CardComponent} from './card/card.component';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';


@NgModule({
  declarations: [CardComponent, ImagesComponent],
  imports: [
    CommonModule
  ],
  exports:[CardComponent,ImagesComponent]
})
export class SharedModule { }
