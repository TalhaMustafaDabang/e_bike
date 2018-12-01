import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const SEARCH = '[Hero] Search';
export const SEARCH_COMPLETE = '[Hero] Search Complete';
export const LOAD = '[Hero] Load';
export const SELECT = '[Hero] Select';
export const ADD_DATA = '[Hero] Add Data';



/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: Hero) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Hero) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Hero) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: string) { }
}

export class NewDataAction implements Action {
  readonly type = ADD_DATA;

  constructor(public payload: Hero) { }
}



/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = SearchAction
  | SearchCompleteAction
  | LoadAction
  | NewDataAction
  | SelectAction;
