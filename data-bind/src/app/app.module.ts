import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropetyComponent } from './input-propety/input-propety.component';
import { OutputPropetyComponent } from './output-propety/output-propety.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropetyComponent,
    OutputPropetyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
