import { Action } from '@ngrx/store';
import { ClassifiedDetails } from '../../models/classifiedDetails';


export const classifierActions = {
  GET_DATA: '[ClassifiedDetails] Get Data',
  CLASSIFIED_ADD_DATA: '[ClassifiedDetails] Add Data',
  CLASSIFIED_ADD_DATA_SUCCESS: '[ClassifiedDetails] Add Data Success',
  CLASSIFIED_ADD_DATA_FAILED: '[ClassifiedDetails] Add Data Failed',
  
}


export class AddNewClassifier implements Action {
  readonly type = classifierActions.CLASSIFIED_ADD_DATA;
  constructor(public payload: ClassifiedDetails) { }
}




export class GetNewClassifier implements Action {
  readonly type = classifierActions.GET_DATA;
  constructor(public payload: ClassifiedDetails) { }
}


export type Actions
  = GetNewClassifier
  | AddNewClassifier;



