import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
