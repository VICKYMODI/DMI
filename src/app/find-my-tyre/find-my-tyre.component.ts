import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../services/http-service.service";
// import { TyreRepository } from '../services/tyre.repository';
import { ModelListRequestAction,MakeListRequestAction,TrimListRequestAction,YearListRequestAction } from '../actions/findTyre-actions';
import { Store, select } from "@ngrx/store";
import { RootReducerState } from "../reducer";


@Component({
  selector: "app-find-my-tyre",
  templateUrl: "./find-my-tyre.component.html",
  styleUrls: ["./find-my-tyre.component.css"]
})
export class FindMyTyreComponent implements OnInit {
  years :any[];
  makes :any;
  models :any;
  trims :any;
  yearChoosen: any = "Select Year";
  makeChoosen: any;
  modelsChoosen: any;
  trimChoosen: any;
  yearSelected: boolean = false;
  makeSelected: boolean = false;
  modelSelected: boolean = false;
  trimSelected: boolean = false;
  status: any = "Year";
  constructor(
    private api: HttpServiceService,
    private store: Store<RootReducerState>
  ) {}

  ngOnInit(): void {
    this.store
    .select(state => state)
    .subscribe(data => {
      this.years = data.tyre.years;
      this.makes = data.tyre.makes;
      this.models = data.tyre.models;
      this.trims = data.tyre.trims;
    });
    this.getYears();
  }

  getYears() {

    console.log("getYears");
    const action = new YearListRequestAction();
    // dispatch an action to get array of years
    this.store.dispatch(action);
    this.makes  = [];
    this.models = [];
    this.trims  = [];
  }

  getYearSelected() {
    this.status = "Make";
    this.yearSelected = true;
    this.makeChoosen = "";
    this.modelsChoosen = "";
    this.trimChoosen = "";
    this.getMakes();
  }

  getMakeSelected() {
    this.status = "Model";
    this.makeSelected = true;
    this.modelsChoosen = "";
    this.trimChoosen = "";
    console.log("callingModels")
    this.getModels();
  }

  getModelSelected() {
    this.status = "Trim";
    this.trimSelected = true;
    this.trimChoosen = "";
    this.getTrims();
  }

  getMakes() {


    const action = new MakeListRequestAction();
    // dispatch an action to get array of years
    this.store.dispatch(action);
    this.trims  = [];

  }

  getModels() {


    const action = new ModelListRequestAction();
    // dispatch an action to get array of years
    this.store.dispatch(action);

    this.trims  = [];
  }

  getTrims() {

    const action = new TrimListRequestAction();
    // dispatch an action to get array of years
    this.store.dispatch(action);
    this.trims  = [];
  }
}
