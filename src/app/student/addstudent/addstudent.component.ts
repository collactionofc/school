import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-addstudent",
  templateUrl: "./addstudent.component.html",
  styleUrls: ["./addstudent.component.scss"],
})
export class AddstudentComponent implements OnInit {
  public imglist;
  public addstudent:FormGroup;
  public list;
  public img;

  constructor(private api: ApiService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addstudent =  this.formBuilder.group({
      name: [null, Validators.required],
      City: [null, Validators.required]
    });
  }

  submit() {
    let data={
      name:this.addstudent.controls.name.value,
      city:this.addstudent.controls.City.value,
      imageurl:this.img
    }
    console.log(data);
    if (this.addstudent.invalid) {
      this.addstudent.markAllAsTouched();
    } else {
      this.api.postdata('student',data).then(()=>{
        this.addstudent.reset();
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
