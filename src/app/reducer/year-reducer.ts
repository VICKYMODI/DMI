import { Action } from "../actions";
import { YEAR_LIST_REQUEST, YEAR_LIST_SUCCESS } from "../actions/year-actions";

export interface YearReducerState{
    loading : boolean;
    loaded : boolean;
    years : any;
}

const initialState : YearReducerState = {
    loaded : false,
    loading : false,
    years : [],
}

export function YearReducer(state = initialState, action: Action) : YearReducerState{

    switch(action.type){
        case YEAR_LIST_REQUEST : {
            return {...state, loading:true}
        }
        case YEAR_LIST_SUCCESS : {
            const updatedYear = state.years.concat(action.payload.data);
            return {...state, loading:false,loaded:true, years:updatedYear }
        }

        default : {
            return state;
        }
    }

}

//selector
export const getLoading = (state : YearReducerState) => state.loading;
export const getLoaded = (state : YearReducerState) => state.loaded;
export const getYears = (state : YearReducerState) => state.years;