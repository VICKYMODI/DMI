import { Injectable } from '@angular/core';
import { Actions,  createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as findTyreActions from '../actions/findTyre-actions';
import { HttpServiceService } from '../services/http-service.service'

@Injectable()
export class TyreEffects {
  constructor(private actions$: Actions, private api: HttpServiceService) {}

  loadYears = createEffect(() => this.actions$.pipe(
    ofType(findTyreActions.YEAR_LIST_REQUEST),
    switchMap(action => {
      return this.api
        .get('/years')
        .pipe(
          map((response: any) => {
              console.log("res",response)
            return new findTyreActions.YearListsSuccessAction({
              data: response.year,

            });
          }),
          catchError(error => of(new findTyreActions.YearListsFailureAction(error)))
        );
    })
  ));

  loadMakes = createEffect(() =>this.actions$.pipe(
    ofType(findTyreActions.MAKE_LIST_REQUEST),
    switchMap(action => {
      return this.api.get('/makes').pipe(
        map((response: any) => {
          return new findTyreActions.MakeListsSuccessAction({
            data: response.make
          });
        }),
        catchError(error => of(new findTyreActions.MakeListsFailureAction(error)))
      );
    })
  ));

  loadModels = createEffect(() =>this.actions$.pipe(
    ofType(findTyreActions.MODEL_LIST_REQUEST),
    switchMap(action => {
      return this.api.get('/models').pipe(
        map((response: any) => {
          return new findTyreActions.ModelListsSuccessAction({
            data: response.model
          });
        }),
        catchError(error => of(new findTyreActions.ModelListsFailureAction(error)))
      );
    })
  ));

  loadTrims = createEffect(() =>this.actions$.pipe(
    ofType(findTyreActions.TRIM_LIST_REQUEST),
    switchMap(action => {
      return this.api.get('/trim').pipe(
        map((response: any) => {
          return new findTyreActions.TrimListsSuccessAction({
            data: response.trim,
          });
        }),
        catchError(error => of(new findTyreActions.TrimListsFailureAction(error)))
      );
    })
  ));
}
