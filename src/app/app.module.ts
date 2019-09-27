import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SortInputComponent } from './components/sort-input/sort-input.component';
import { SortOutputComponent } from './components/sort-output/sort-output.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    SortInputComponent,
    SortOutputComponent,
    SortComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
