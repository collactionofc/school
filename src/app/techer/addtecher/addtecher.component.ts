import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder } from "@angular/forms";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-addtecher',
  templateUrl: './addtecher.component.html',
  styleUrls: ['./addtecher.component.scss']
})
export class AddtecherComponent implements OnInit {
  public imglist;
  public addtecher:FormGroup;
  public list;
  public img;

  constructor(private api: ApiService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addtecher =  this.formBuilder.group({
      name: [null, Validators.required],
      Subject: [null, Validators.required]
    });
  }

  submit() {
    let data={
      name:this.addtecher.controls.name.value,
      Subject:this.addtecher.controls.Subject.value,
      imageurl:this.img
    }
    if (this.addtecher.invalid) {
      this.addtecher.markAllAsTouched();
    } else {
      this.api.postdata('techer',data).then(()=>{
        this.addtecher.reset();
        alert("data added sucessfully")
      }).catch(()=>{
        alert("something wrong")
      })
    }
  }

  getimage(data){
    console.log(data);
    this.img=data;
  }

}
