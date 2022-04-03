 import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent   {
  mydata:any;

  intrestlist: intrest[] = [];
 rowData={'active':false}
  
  country= [
    {name:"<-select->"},
    { name: "India"},
    { name: "Australia"},
    { name: "Canada"},
    { name: "USA"},
    { name: "Pakistan"},
   
  ]

   
  contactForm = new FormGroup({
    Name: new FormControl(),
    Address: new FormControl(),
    gender: new FormControl(),
    intrest: new FormControl(),
    country: new FormControl()
  })

  constructor() { 

  }

  ngOnInit() {
    this.getintrest();
  }




 getintrest(){
   this.intrestlist=[
     {name:'movie', isslected:false},
     {name:'sport', isslected:false},
     {name:'songs', isslected:false}
   ];
  
 }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // if (this.contactForm.valid) {
    //   console.log("Form Submitted!");
    // }
    // this.contactForm.reset();
    console.warn(this.contactForm.value);
    this.mydata=this.contactForm.value;
    this.contactForm.reset();

  }
}

class intrest{
  name!: string;
  isslected!: boolean;
}