import { Component } from '@angular/core';
import {FormBuilder, FormArray, FormControl,Validators } from '@angular/forms';
import { EnrollDataService } from './enroll-data.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private fb : FormBuilder, private myService : EnrollDataService){}

    payment=["Debit Card","Credit Card","Net Banking"];
     
    submit=0;

    /*Tech: Array<any> = [
      { tech: "HTML"},
      { tech: "CSS"},
      { tech: "JavaScript"},
      { tech: "PHP"},
      { tech: "Database"},
      { tech: "WordPress"},
      { tech: "Ruby on Rails"},
      { tech: "Python"},
      { tech: "DevOps"},
      { tech: "Web Security"},
      { tech: "Front-End Devlopement"},
      { tech: "Back-End Devlopement"}
    ];*/

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
      comment : [""],
      paid : ["unpaid",Validators.required],
      rate : ["",Validators.required],
      WSdate : ["",Validators.required],
      source: ["",Validators.required],
      learn : ["",Validators.required] //this.fb.array([])
    });


    onCheckboxChange(e) {
      const checkArray1: FormArray = this.resgistrationForm.get('learn') as FormArray;
      if (e.target.checked) {
        checkArray1.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        checkArray1.controls.forEach((item: FormControl) => {
          if (item.value == e.target.value) {
            checkArray1.removeAt(i);
            return;
          }
          i++;
        });
      }
    }

    onSubmit(){
     this.myService.enrollData(this.resgistrationForm.value).subscribe(
        data => console.log("Success!",data,this.submit=1),
        error => console.log("Error!",error)
      );
    }
}
