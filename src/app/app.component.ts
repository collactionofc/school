import { Component, OnInit } from '@angular/core';
import {ApiService} from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor( private api:ApiService) { }

   public subject;
  public data:any;
  public demo;
  public name;
  public imglist;
public img;

  ngOnInit(): void {



  }


  
}
