import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from "clarity-angular";

import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { AboutComponent } from './about/about.component';
import { CVComponent } from './cv/cv.component';
import { InterestsComponent } from './interests/interests.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { KirtlandswarblervizComponent } from './kirtlandswarblerviz/kirtlandswarblerviz.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CVComponent,
    InterestsComponent,
    PortfolioComponent,
    KirtlandswarblervizComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ClarityModule.forRoot(),
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
