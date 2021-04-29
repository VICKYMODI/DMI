import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  API_URL : string = "https://6080be3273292b0017cdbf2a.mockapi.io"; 

  constructor(    private http: HttpClient,
    private router: Router,) { }

  get(path, params: HttpParams = new HttpParams()) {
    return this.http.get(`${this.API_URL}/${path}`, { params });  
    }

  
    post(path, params) {
    return this.http.post(`${this.API_URL}/${path}`, params);
    }

    patch(path, params) {
    return this.http.patch(`${this.API_URL}/${path}`, params);
    }
}
