import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    SearchbookComponent,
    ViewbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
