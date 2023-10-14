import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SliderComponent } from './Components/slider/slider.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductImgComponent } from './Components/product-img/product-img.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    HomeComponent,
    ProductImgComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
