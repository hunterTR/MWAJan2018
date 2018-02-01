import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  myForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private service:DataService) {
    this.myForm = this.formBuilder.group({
      'name': ['',Validators.required],
      'email': ['',Validators.required],
      'post' : ['',Validators.minLength(10)]
    });
   }

   submit(){
     console.log(this.myForm.value);
   }
   getDatas(){
      this.service.getPostData().subscribe((data)=>{
        console.log(data);
          this.myForm.controls['post'].setValue(data[0].body);
      });
      this.service.getUser().subscribe((data:any) => {
        this.myForm.controls['name'].setValue(data.name);
        this.myForm.controls['email'].setValue(data.email);
        console.log(data);
      });
   }
  ngOnInit() {
  }

}
