import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { Page404Component } from './page404/page404.component';
import { RevisionTestComponent } from './revision-test/revision-test.component';
import { Test2Component } from './test2/test2.component';
import { TableauAletComponent } from './tableau-alet/tableau-alet.component';
import { FormularComponent } from './formular/formular.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "people-list",
    component: PeopleListComponent

  },

  {
    path: "test",
    component: RevisionTestComponent
  },
  {
    path: "test2",
    component: Test2Component
  },
  {
    path: "alertTab",
    component: TableauAletComponent
  },
  {
    path: 'form',
    component: FormularComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }