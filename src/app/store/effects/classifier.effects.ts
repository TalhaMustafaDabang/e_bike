import { tap } from 'rxjs/operators';
// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { GetNewClassifier, classifierActions } from '../actions/classifier.actions';


const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),

};

@Injectable()
export class ClassifierEffects {


  // Listen for the 'LOGIN' action


  constructor(private http: HttpClient, private actions$: Actions) {
    console.log('EFFECTS MY BOY');

  }

  @Effect()
  addNewClassifier$: Observable<Action> = this.actions$.pipe(
    ofType(classifierActions.CLASSIFIED_ADD_DATA),
    // tap((action: any) => { console.warn('abc acbascbabckashcjkah ', action.payload) }),
    switchMap((action: any) =>
      this.http.post('http://localhost:5200/api/classified/crete-add', action.payload, httpOptions).pipe(
        map(data => { console.warn('return api', data); return { type: classifierActions.CLASSIFIED_ADD_DATA_SUCCESS, payload: data } }),
        catchError((e) => { console.warn('errrrrrrrrrr', e); return of({ type: classifierActions.CLASSIFIED_ADD_DATA_FAILED }) })
      )
    )
  );

}