import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {

  registerDealer: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
    

  }

  ngOnInit() {
  }

  createForm() {
    this.registerDealer = this.fb.group({
      d_id: ['', Validators.required],
      'cselection': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'sname': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      // sname: ['', Validators.required],
      'brand': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'address': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      b_img: ['Honda125', Validators.required],
      
    })
  }

  submit() {
      console.log(this.registerDealer.value);
  }

 
}
