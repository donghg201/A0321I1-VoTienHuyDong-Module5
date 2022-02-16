import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
// @ts-ignore
import {AppRoutingModule} from './app-routing.module.ts';
import {AppComponent} from './app.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogComponent} from './blog/blog.component';
// @ts-ignore
import {TodoComponent} from './todo/todo.component';
// @ts-ignore
import {TokenInterceptor} from './token.interceptor';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
