import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ApiService} from '../../services/api.service';


@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
public img;
@Output() image=new EventEmitter<string>();

public imglist;
  constructor(private api:ApiService) { }
  ngOnInit() {
    this.api.getdata("img").subscribe((res) => {
      this.imglist = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
    });
  }
  onChange(data:string){
    console.log("onchange",data);
    this.image.emit(data);
    this.img=(data);
  }
}
