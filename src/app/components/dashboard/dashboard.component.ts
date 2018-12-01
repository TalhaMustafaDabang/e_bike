// import { Actions } from './../../store/actions/hero.actions';
// import { getBooksState } from './../../store/combineReducer';
// import { getAll } from './../../store/reducer/hero.reducer';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../providers/hero.service';
import { Store } from '@ngrx/store';
import { Actions } from '../../store/actions/hero.actions';
// import { Action } from 'rxjs/scheduler/Action';

import * as hero from '../../store/actions/hero.actions';
import * as fromRoot from '../../store/combineReducer';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  heroesStore;

  uniqueId: number = 0;
  name: string;

  constructor(private heroService: HeroService, private _store: Store<any>) {


    this.heroesStore = _store.select('hero').subscribe(data => {
      console.log(data);
    });

    // _store.select(getBooksState).subscribe(data => {
    //   console.log(data);

    // })

    // _store.dispatch({ type: hero.SEARCH, payload: { id: 1, name: 'Learn ngrx/store' } });


    // _store.select(fromRoot.getHeroID)
    //   .subscribe(data => {
    //     console.log(data);
    //   })


    // this.heroesStore = _store.select('books')
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  submit() {
      this.uniqueId++;
      this._store.dispatch({type: hero.ADD_DATA, payload: {id : this.uniqueId, name: this.name}})
      this.name = "";
  }

}
