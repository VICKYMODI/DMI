import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindMyTyreComponent } from './find-my-tyre/find-my-tyre.component';
import { HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: 'FindMyTyreComponent', component: FindMyTyreComponent },
  { path: '', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
