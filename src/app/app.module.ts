import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavlogoComponent } from './components/navlogo/navlogo.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { CardworkComponent } from './components/myprojects/cardwork/cardwork.component';
import {RouterModule} from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NavlogoComponent,
    MyprojectsComponent,
    CardworkComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
