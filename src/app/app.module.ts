import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CarToolModule } from './car-tool/car-tool.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { appRouterModule } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarToolModule,
    appRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
