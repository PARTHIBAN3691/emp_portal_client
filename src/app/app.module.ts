import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes =[
  {path:'list', component: EmployeeListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {useHash: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
