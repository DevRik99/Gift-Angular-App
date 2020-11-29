import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GifGridComponent } from './Componentes/gif-grid/gif-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GifGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
