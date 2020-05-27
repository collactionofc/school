import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor( private api:ApiService) { }

  public data;

  ngOnInit() {
    this.api.getdata('student').subscribe((res)=>{
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
