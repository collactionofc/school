import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-techer',
  templateUrl: './techer.component.html',
  styleUrls: ['./techer.component.scss']
})
export class TecherComponent implements OnInit {


  public data;
  constructor(private api:ApiService) { }


  ngOnInit() {
    this.api.getdata('techer').subscribe((res)=>{
      this.data=res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } 
      })
      console.log(this.data)
    })
  }



}
