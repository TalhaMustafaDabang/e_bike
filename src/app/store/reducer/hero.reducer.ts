import { Hero } from '../../models/hero';
import * as hero from '../actions/hero.actions';
import { createSelector } from 'reselect';

export interface State {
    id: number;
    name: string;
};

export const initialState: State = {
    id: 0,
    name: ""
};


export function reducer(state = initialState, action: hero.Actions): State {
    console.log('hero reducer');

    switch (action.type) {

        case hero.SEARCH:
            console.log('hero.SEARCH');
            return Object.assign({}, state, {

                id: action.payload.id,
                name: action.payload.name

            })
        case hero.SEARCH_COMPLETE:
            const data = action.payload;
            return Object.assign({}, state, { data: data, pending: false })

        case hero.ADD_DATA:
            // const data = action.payload;
            return Object.assign({}, state, {

                id: action.payload.id,
                name: action.payload.name

            })

        default: {
            return state;
        }
    }
}

export const getId = (state: State) => state.id;

export const getName = (state: State) => state.name;


// export const getAreaPathToCurrentArea = (state: State) => state.areaPathToCurrentArea;



// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
//     return entities[selectedId];
//   });

//   export const getAll = createSelector(getName, getId, (entities, ids) => {
//     return ids.map(id => entities[id]);
//   });