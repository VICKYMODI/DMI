import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { HttpServiceService } from '../../app/http-service.service'
import { YearListRequestAction, YearListsSuccessAction } from '../actions/year-actions';
import { getYearLoaded, getYearLoading, RootReducerState } from '../reducer';
import { getYears } from '../reducer/year-reducer';

// import { MakeListRequestAction, MakeListsSuccessAction } from '../actions/make-actions';
// import { getMakeLoaded, getMakeLoading } from '../reducer';
// import { getMakes } from '../reducer/make-reducer';

@Component({
  selector: 'app-find-my-tyre',
  templateUrl: './find-my-tyre.component.html',
  styleUrls: ['./find-my-tyre.component.css']
})
export class FindMyTyreComponent implements OnInit {

  years = [];
  makes = [];
  models = [];
  trims = [];
  yearChoosen : any;
  makeChoosen : any;
  modelsChoosen : any;
  trimChoosen : any;
  yearSelected : boolean = false;
  makeSelected : boolean = false;
  modelSelected : boolean = false;
  trimSelected : boolean = false;
  status : any = 'Year';

  constructor(private api : HttpServiceService, private store :Store <RootReducerState>) { }

  ngOnInit(): void {
    this.getYears();
    this.getMakes();
    this.getModels();
    this.getTrims();
  }

  getYears(){
    

    const loading$ = this.store.select(getYearLoading);
    const loaded$ = this.store.select(getYearLoaded)
    const getYearsData = this.store.select(getYears)

    combineLatest([loaded$, loading$]).subscribe((data)=>{
      if(!data[0] && !data[1]){
        this.store.dispatch(new YearListRequestAction());

         this.api.get('/years').subscribe((res:any)=>{
          this.store.dispatch(new YearListsSuccessAction({data:res.year}))
        });
      }
    })
    getYearsData.subscribe((data:any)=>{
      this.years = data.years;
      
    })
  }

  getYearSelected(){
    this.status = 'Make'
    this.yearSelected = true
  }


  getMakeSelected(){
    this.status = 'Model'
    this.makeSelected = true;
  }

  getModelSelected(){
    this.status = 'Trim'
    this.trimSelected = true;
  }

  getMakes(){

    this.api.get('/makes').subscribe((data:any)=>{
      this.makes = data.make;
      console.log("hh",data)
    })
  }

  getModels(){
    this.api.get('/models').subscribe((data:any)=>{
      this.models = data.model;
      console.log("model",data)
    })
  }

  getTrims(){
    this.api.get('/trim').subscribe((data:any)=>{
      this.trims = data.trim;
      console.log("hh",data)
    })
  }

}
