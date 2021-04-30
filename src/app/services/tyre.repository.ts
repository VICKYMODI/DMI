import {Injectable} from '@angular/core';
import { Store } from "@ngrx/store";
import { getMakeLoaded, getMakeLoading, getModelLoaded, getModelLoading, getTrimLoaded, getTrimLoading, getYearLoaded, getYearLoading, RootReducerState } from "../reducer";
import { HttpServiceService } from "../services/http-service.service";
import { getMakes, getModels, getTrims, getYears } from "../reducer/findTyre-reducer";
import { combineLatest, Observable } from "rxjs";
import {
    MakeListRequestAction,
    MakeListsSuccessAction,
    ModelListRequestAction,
    ModelListsSuccessAction,
    TrimListRequestAction,
    TrimListsSuccessAction,
    YearListRequestAction,
    YearListsSuccessAction
  } from "../actions/findTyre-actions";


@Injectable()

export class TyreRepository{
    constructor(private store: Store<RootReducerState>, private api: HttpServiceService ){

    }

    getYearList(force = false) : [Observable<boolean>, Observable<any>]{
        const loading$ = this.store.select(getYearLoading);
        const loaded$ = this.store.select(getYearLoaded);
        const getYearsData = this.store.select(getYears);

        console.log("year",loading$,loaded$)

        combineLatest([loaded$, loading$]).subscribe(data => {
            if (!data[0] && !data[1] || force) {
              this.store.dispatch(new YearListRequestAction());
      
              this.api.get("/years").subscribe((res: any) => {
                console.log("reproyears",res)
                this.store.dispatch(new YearListsSuccessAction({ data: res.year }));
              });
            }
          });

          return [loaded$,getYearsData];
    }

    getMakeList(force = false) : [Observable<boolean>, Observable<any>]{


        const loading$ = this.store.select(getMakeLoading);
        const loaded$ = this.store.select(getMakeLoaded);
        const getMakesData = this.store.select(getMakes);

        console.log("make",loading$,loaded$)

        combineLatest([loaded$, loading$]).subscribe(data => {

            console.log("make2",data)
            if (!data[0] && !data[1] || force) {
              this.store.dispatch(new MakeListRequestAction());
      
              this.api.get("/makes").subscribe((res: any) => {
                  console.log("repromakes",res)
                this.store.dispatch(new MakeListsSuccessAction({ data: res.make }));
              });
            }
          });

          return [loaded$,getMakesData];
    }

    getModelList(force = false) : [Observable<boolean>, Observable<any>]{
        const loading$ = this.store.select(getModelLoading);
        const loaded$ = this.store.select(getModelLoaded);
        const getModelsData = this.store.select(getModels);

        combineLatest([loaded$, loading$]).subscribe(data => {
            if (!data[0] && !data[1] || force) {
              this.store.dispatch(new ModelListRequestAction());
      
              this.api.get("/models").subscribe((res: any) => {
                this.store.dispatch(new ModelListsSuccessAction({ data: res.model }));
              });
            }
          });

          return [loaded$,getModelsData];
    }

    getTrimList(force = false) : [Observable<boolean>, Observable<any>]{
        const loading$ = this.store.select(getTrimLoading);
        const loaded$ = this.store.select(getTrimLoaded);
        const getTrimsData = this.store.select(getTrims);

        combineLatest([loaded$, loading$]).subscribe(data => {
            if (!data[0] && !data[1] || force) {
              this.store.dispatch(new TrimListRequestAction());
      
              this.api.get("/trim").subscribe((res: any) => {
                this.store.dispatch(new TrimListsSuccessAction({ data: res.trim }));
              });
            }
          });

          return [loaded$,getTrimsData];
    }
}