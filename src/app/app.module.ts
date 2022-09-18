import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EachCountryComponent } from './each-country/each-country.component';
import { RouterModule } from '@angular/router';
import { MoreDetailsComponent } from './more-details/more-details.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, EachCountryComponent, MoreDetailsComponent],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
