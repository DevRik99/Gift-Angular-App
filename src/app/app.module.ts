import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GifGridComponent } from './Componentes/gif-grid/gif-grid.component';
import { GifGritItemComponent } from './Componentes/gif-grit-item/gif-grit-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGifComponent } from './Componentes/form-gif/form-gif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GifGridComponent,
    GifGritItemComponent,
    FormGifComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
