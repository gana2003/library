import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
