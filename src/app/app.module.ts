import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindMyTyreComponent } from './find-my-tyre/find-my-tyre.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducer';
import { TyreRepository } from './services/tyre.repository';
import { HttpServiceService } from './services/http-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FindMyTyreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(rootReducer)
  ],
  providers: [TyreRepository,HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
