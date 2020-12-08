import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { I18nModule } from './i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    FormTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
