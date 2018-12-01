import { createSelector } from 'reselect';
import * as fromHero from './reducer/hero.reducer';
import * as fromClassifier from './reducer/classifier.reducer';


export interface State {
    hero: fromHero.State;
    classifier: fromClassifier.State;
    
}


export const reducers = {
    hero: fromHero.reducer,  
    classifier: fromClassifier.reducer,  

};


export const getHeroState = (state: State) => state.hero;
export const getClassifierState = (state: State) => state.classifier;

export const getHeroID = createSelector(getHeroState, fromHero.getId);
export const getHeroName = createSelector(getHeroState, fromHero.getName);


export const getClassifierData = createSelector(getClassifierState, fromClassifier.getclassifier_data);