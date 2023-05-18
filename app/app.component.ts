import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form-validation';
  reactiveform : FormGroup;
  submitMessage: string;
  submitted: boolean = false;
  formDetails: any;
  ngOnInit(){
    this.reactiveform=new FormGroup({
      firstname : new FormControl(null, Validators.required),
      lastname : new FormControl(null,Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
      country : new FormControl(null),
      gender : new FormControl(null)
    })
    
  }
  onSubmit(){
    if (this.reactiveform.valid) {
      this.submitMessage = 'Form submitted successfully.';
      this.formDetails = this.reactiveform.value;
     this.submitted = true;
    } else {
      this.submitMessage = 'Please fill in all required fields.';
    console.log(this.reactiveform);
  }
}
}