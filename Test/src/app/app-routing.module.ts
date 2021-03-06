import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "form", component: FormComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports:
    [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
