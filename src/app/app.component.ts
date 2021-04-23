import { Component } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { EnrollDataService } from './enroll-data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private fb : FormBuilder, private myService : EnrollDataService){}

    payment=["Debit Card","Credit Card","Net Banking"];

    CountryData: Array<any> = [
      { date: "May 1st-3rd"},
      { date: "May 15th-18th"},
      { date: "June 1st-3rd"},
      { date: "June 15th-18th"},
      { date: "July 1st-3rd"},
      { date: "July 1st-3rd"},
    ];

    public resgistrationForm = this.fb.group({
      fullName : ["",[Validators.required,Validators.pattern]],
      phone : ["",[Validators.required,Validators.pattern]],
      email : ["",[Validators.required,Validators.pattern]],
      street : ["",Validators.required],
      city: ["",Validators.required],
      state: ["",Validators.required],
      postalcode: ["",Validators.required],
      occupation: ["",Validators.required],
      company: ["",Validators.required],
      job: ["",Validators.required],
      checkArray: this.fb.array([])
    });


    onSubmit(){
        this.myService.enrollData(this.resgistrationForm.value).subscribe(
          data => console.log("Success!",data),
          error => console.log("Error!",error)
        );
    }
}
