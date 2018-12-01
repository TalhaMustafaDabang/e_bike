import { ClassifiedDetails } from '../../models/classifiedDetails';
import * as classifier from '../actions/classifier.actions';
import { createSelector } from 'reselect';

// export interface State {
//     id: number;
//     name: string;
// };

export interface State {

    classifier_data: {
        brand: string;
        city: string;
        description: string;
        mobilenumber: number;
        price: number;
        sellername: string;
        title: string;
        uid: string;
        addid: number;
        year: string;
    }


}


export const initialState: State = {
    classifier_data: {
    brand: "",
    city: "",
    description: "",
    mobilenumber: 0,
    price: 0,
    sellername: "",
    title: "",
    uid: "",
    addid: 0,
    year: ""
    }
};


export function reducer(state = initialState, action: classifier.Actions): State {
    console.log('classifier reducer');

    switch (action.type) {

        case classifier.classifierActions.CLASSIFIED_ADD_DATA:
            console.log('CLASSIFIED_ADD_DATA', action.payload);
            return Object.assign({}, state, action.payload)
      
            case classifier.classifierActions.CLASSIFIED_ADD_DATA_SUCCESS:
            console.log('CLASSIFIED_ADD_DATA_SUCCESS', action.payload);
            return Object.assign({}, state, action.payload)

            case classifier.classifierActions.CLASSIFIED_ADD_DATA_FAILED:
            console.log('CLASSIFIED_ADD_DATA_FAILED');
            return state

        default: {
            return state;
        }
    }
}

export const getclassifier_data = (state: State) => state.classifier_data;
// export const getCity = (state: State) => state.city;
// export const getDescription = (state: State) => state.description;
// export const getMobilenumber = (state: State) => state.mobilenumber;
// export const getPrice = (state: State) => state.price;
// export const getSellerName = (state: State) => state.sellername;
// export const getTitle = (state: State) => state.title;
// export const getUid = (state: State) => state.uid;
// export const getAddid = (state: State) => state.addid;
// export const getYear = (state: State) => state.year;




// export const getAreaPathToCurrentArea = (state: State) => state.areaPathToCurrentArea;



// export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
//     return entities[selectedId];
//   });

//   export const getAll = createSelector(getName, getId, (entities, ids) => {
//     return ids.map(id => entities[id]);
//   });