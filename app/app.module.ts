import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';

import {FormsModule} from '@angular/forms'
import {WelcomeComponent} from './home/welcome.component'
import {AboutComponent} from './home/about.component'

@NgModule({
  imports:      [ BrowserModule  ,
  FormsModule,
                  RouterModule.forRoot([
                    {path:'welcome',component:WelcomeComponent},
                    {path:'about',component:AboutComponent},
                    {path:'',redirectTo:'welcome',pathMatch:'full'},
                    {path:'**',redirectTo:'welcome',pathMatch:'full'}
                  ])],
  declarations: [ AppComponent, WelcomeComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }




