import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from "@angular/forms";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
 //<<<< import it here

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InputsModule, BrowserAnimationsModule, FormsModule, ButtonsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
