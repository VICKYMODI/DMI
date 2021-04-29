import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromYear from "./year-reducer";

export interface RootReducerState{
    years : fromYear.YearReducerState
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
    years : fromYear.YearReducer,
};

export const getYearState = (state : RootReducerState) => state.years;



export const getYearLoaded = createSelector(getYearState,fromYear.getLoaded)
export const getYearLoading = createSelector(getYearState,fromYear.getLoading);
export const getYears = createSelector(getYearState,fromYear.getYears)
