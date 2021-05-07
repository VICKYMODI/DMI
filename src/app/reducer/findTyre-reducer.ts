import { Action } from "../actions";
import { YEAR_LIST_REQUEST, YEAR_LIST_SUCCESS,MAKE_LIST_REQUEST,MAKE_LIST_SUCCESS,MODEL_LIST_REQUEST,MODEL_LIST_SUCCESS,TRIM_LIST_REQUEST,TRIM_LIST_SUCCESS } from "../actions/findTyre-actions";

export interface TyreReducerStat{
    loading : boolean;
    loaded : boolean;
    years : any[];
    makes : any[];
    models :any[];
    trims : any[]
}

const initialState : TyreReducerStat = {
    loading : false,
    loaded : false,
    years : [],
    makes : [],
    models : [],
    trims : []
}

export function TyreReducer(state = initialState, action: Action) : TyreReducerStat{

    switch(action.type){
        case YEAR_LIST_REQUEST : {
            return {...state, loading:true}
        }
        case YEAR_LIST_SUCCESS : {
            const updatedYear = state.years.concat(action.payload.data);
            return {...state, loading:false,loaded:true, years:updatedYear }
        }

        case MAKE_LIST_REQUEST : {
            return {...state, loading:true}
        }
        case MAKE_LIST_SUCCESS : {
            const updatedMake = state.makes.concat(action.payload.data);
            return {...state, loading:false,loaded:true, makes:updatedMake }
        }

        case MODEL_LIST_REQUEST : {
            return {...state, loading:true}
        }
        case MODEL_LIST_SUCCESS : {
            const updatedModel = state.models.concat(action.payload.data);
            return {...state, loading:false,loaded:true, models:updatedModel }
        }

        case TRIM_LIST_REQUEST : {
            return {...state, loading:true}
        }
        case TRIM_LIST_SUCCESS : {
            const updatedTrim = state.trims.concat(action.payload.data);
            return {...state, loading:false,loaded:true, trims:updatedTrim }
        }

        default : {
            return state;
        }
    }

}

//selector
// export const getLoadingYear = (state : TyreReducerStat) => state.loading;
// export const getLoadedYear = (state : TyreReducerStat) => state.loaded;
// export const getYears = (state : TyreReducerStat) => state.years;

// export const getLoadingMake = (state : TyreReducerStat) => state.loading;
// export const getLoadedMake = (state : TyreReducerStat) => state.loaded;
// export const getMakes = (state : TyreReducerStat) => state.makes;

// export const getLoadingModel = (state : TyreReducerStat) => state.loading;
// export const getLoadedModel = (state : TyreReducerStat) => state.loaded;
// export const getModels = (state : TyreReducerStat) => state.models;

// export const getLoadingTrim = (state : TyreReducerStat) => state.loading;
// export const getLoadedTrim = (state : TyreReducerStat) => state.loaded;
// export const getTrims = (state : TyreReducerStat) => state.trims;