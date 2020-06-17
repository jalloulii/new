import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { Page404Component } from './page404/page404.component';
import { RevisionTestComponent } from './revision-test/revision-test.component';
import { Test2Component } from './test2/test2.component';
import { TableauAletComponent } from './tableau-alet/tableau-alet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularComponent } from './formular/formular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PeopleListComponent,
    Page404Component,
    RevisionTestComponent,
    Test2Component,
    TableauAletComponent,
    FormularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
