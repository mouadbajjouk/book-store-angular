import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './public-components/home/home.component';


@NgModule({
  declarations: [AppComponent, AboutUsComponent, HowItWorksComponent, HomeComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: 'appTitle', useValue: {title: 'This is the app title', desc: 'This is the description'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
