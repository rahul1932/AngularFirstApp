import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreatenotebookComponent } from './createnotebook/createnotebook.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatenotebookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CreatenotebookComponent]
})
export class AppModule {

}
