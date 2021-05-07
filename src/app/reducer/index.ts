import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as findTyre from "./findTyre-reducer";

export interface RootReducerState{
    tyre : findTyre.TyreReducerStat,
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
    tyre : findTyre.TyreReducer,

};

