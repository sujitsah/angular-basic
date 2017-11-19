import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { listComponent } from './list/list.component';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', component: listComponent },
  { path: 'test-page', component: ShowComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    listComponent,
    ShowComponent


  ],
  imports: [
    BrowserModule,
   RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
