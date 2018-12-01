import { BrandListComponent } from './../../../new-bikes/components/brand-list/brand-list.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SecondHandBiekByPriceComponent } from '../../../components/second-hand-biek-by-price/second-hand-biek-by-price.component';
import { Store, select } from '@ngrx/store';
import { AddNewClassifier } from '../../../store/actions/classifier.actions'
import {State} from '../../../store/combineReducer'
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  createAdds: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<State>) {
    this.createForm();

  }

  ngOnInit() {
  }

  createForm() {
    this.createAdds = this.fb.group({
      brand: ["computers", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      city: ["Karachi", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      description: ["Desctiption", Validators.compose([Validators.required, Validators.minLength(15)])],
      mobilenumber: [123456],
      price: [1250, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      sellername: ["Taimoor", Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      title: ['Honda 125', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      uid: ['12-12-aa'],
      year: ["1992"],
    })
  }

  submit() {
    console.log(this.createAdds.value);
    this.store.dispatch(new AddNewClassifier(this.createAdds.value));
  }
}
