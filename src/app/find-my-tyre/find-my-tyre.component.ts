import { Component, OnInit } from "@angular/core";
import { HttpServiceService } from "../services/http-service.service";
import { TyreRepository } from '../services/tyre.repository'



@Component({
  selector: "app-find-my-tyre",
  templateUrl: "./find-my-tyre.component.html",
  styleUrls: ["./find-my-tyre.component.css"]
})
export class FindMyTyreComponent implements OnInit {
  years = [];
  makes = [];
  models = [];
  trims = [];
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
    private tyreRepository : TyreRepository
  ) {}

  ngOnInit(): void {
    this.getYears();
  }

  getYears() {
    const yearData$ = this.tyreRepository.getYearList()[1];
    yearData$.subscribe(res => {
      console.log("yeardata",res)
      this.years = res.years;
    })
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

    const makeData$ = this.tyreRepository.getMakeList()[1];
    makeData$.subscribe(res => {
      console.log("getMakesdata",res)
      this.makes = res.makes;
    })

  }

  getModels() {

    console.log("modelCalled")
    const modelData$ = this.tyreRepository.getModelList()[1];
    modelData$.subscribe(res => {
      console.log("dataModel",res)
      this.models = res.models;
    })
  }

  getTrims() {
    const modelData$ = this.tyreRepository.getTrimList()[1];
    modelData$.subscribe(res => {
      console.log("data",res)
      this.trims = res.trims;
    })
  }
}
