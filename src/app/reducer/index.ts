import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as findTyre from "./findTyre-reducer";

export interface RootReducerState{
    years : findTyre.YearReducerState,
    makes : findTyre.YearReducerState,
    models : findTyre.YearReducerState,
    trims : findTyre.YearReducerState
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
    years : findTyre.TyreReducer,
    makes : findTyre.TyreReducer,
    models : findTyre.TyreReducer,
    trims : findTyre.TyreReducer,
};

export const getYearState = (state : RootReducerState) => state.years;

export const getMakeState = (state : RootReducerState) => state.makes;

export const getModelState = (state : RootReducerState) => state.models;

export const getTrimState = (state : RootReducerState) => state.trims;



export const getYearLoaded = createSelector(getYearState,findTyre.getLoadedYear);
export const getYearLoading = createSelector(getYearState,findTyre.getLoadingYear);
export const getYears = createSelector(getYearState,findTyre.getYears);

export const getModelLoaded = createSelector(getModelState,findTyre.getLoadedModel);
export const getModelLoading = createSelector(getModelState,findTyre.getLoadingModel);
export const getMakes = createSelector(getModelState,findTyre.getMakes)

export const getMakeLoaded = createSelector(getMakeState,findTyre.getLoadedMake);
export const getMakeLoading = createSelector(getMakeState,findTyre.getLoadingMake);
export const getModels = createSelector(getMakeState,findTyre.getModels)

export const getTrimLoaded = createSelector(getTrimState,findTyre.getLoadedTrim);
export const getTrimLoading = createSelector(getTrimState,findTyre.getLoadingTrim);
export const getTrims = createSelector(getTrimState,findTyre.getTrims)
