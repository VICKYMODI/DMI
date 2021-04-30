import { Action } from "../actions";
import { YEAR_LIST_REQUEST, YEAR_LIST_SUCCESS,MAKE_LIST_REQUEST,MAKE_LIST_SUCCESS,MODEL_LIST_REQUEST,MODEL_LIST_SUCCESS,TRIM_LIST_REQUEST,TRIM_LIST_SUCCESS } from "../actions/findTyre-actions";

export interface YearReducerState{
    loadingYear : boolean;
    loadedYear : boolean;
    years : any;

    loadingMake : boolean;
    loadedMake : boolean;
    makes : any;

    loadingModel : boolean;
    loadedModel : boolean;
    models :any;

    loadingTrim : boolean;
    loadedTrim : boolean;
    trims : any
}

const initialState : YearReducerState = {
    loadingYear : false,
    loadedYear : false,
    years : [],

    loadingMake : false,
    loadedMake : false,
    makes : [],

    loadingModel : false,
    loadedModel : false,
    models : [],

    loadingTrim : false,
    loadedTrim : false,
    trims : []
}

export function TyreReducer(state = initialState, action: Action) : YearReducerState{

    switch(action.type){
        case YEAR_LIST_REQUEST : {
            return {...state, loadingYear:true}
        }
        case YEAR_LIST_SUCCESS : {
            const updatedYear = state.years.concat(action.payload.data);
            return {...state, loadingYear:false,loadedYear:true, years:updatedYear }
        }

        case MAKE_LIST_REQUEST : {
            return {...state, loadingMake:true}
        }
        case MAKE_LIST_SUCCESS : {
            const updatedMake = state.makes.concat(action.payload.data);
            return {...state, loadingMake:false,loadedMake:true, makes:updatedMake }
        }

        case MODEL_LIST_REQUEST : {
            return {...state, loadingModel:true}
        }
        case MODEL_LIST_SUCCESS : {
            const updatedModel = state.models.concat(action.payload.data);
            return {...state, loadingModel:false,loadedModel:true, models:updatedModel }
        }

        case TRIM_LIST_REQUEST : {
            return {...state, loadingTrim:true}
        }
        case TRIM_LIST_SUCCESS : {
            const updatedTrim = state.trims.concat(action.payload.data);
            return {...state, loadingTrim:false,loadedTrim:true, trims:updatedTrim }
        }

        default : {
            return state;
        }
    }

}

//selector
export const getLoadingYear = (state : YearReducerState) => state.loadingYear;
export const getLoadedYear = (state : YearReducerState) => state.loadedYear;
export const getYears = (state : YearReducerState) => state.years;

export const getLoadingMake = (state : YearReducerState) => state.loadingMake;
export const getLoadedMake = (state : YearReducerState) => state.loadedMake;
export const getMakes = (state : YearReducerState) => state.makes;

export const getLoadingModel = (state : YearReducerState) => state.loadingModel;
export const getLoadedModel = (state : YearReducerState) => state.loadedModel;
export const getModels = (state : YearReducerState) => state.models;

export const getLoadingTrim = (state : YearReducerState) => state.loadingTrim;
export const getLoadedTrim = (state : YearReducerState) => state.loadedTrim;
export const getTrims = (state : YearReducerState) => state.trims;