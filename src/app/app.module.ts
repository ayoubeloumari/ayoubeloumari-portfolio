import { DataApiService } from './services/http/data-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { LinkifyPipe } from './pipes/linkify.pipe';

import {ToggleButtonComponent} from './pages/toggle-button/toggle-button.component'
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LinkifyPipe,
    HomeComponent,
    ToggleButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
