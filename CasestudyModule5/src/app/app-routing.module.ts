import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { EmployeeAddComponent } from './components/employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeAddComponent
  ]
})
export class AppRoutingModule { }
