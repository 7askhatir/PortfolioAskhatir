import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './companant/services/services.component';
import { HeaderComponent } from './companant/header/header.component';
import { ContactComponent } from './companant/header/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpecialiteComponent } from './companant/specialite/specialite.component';
import { MoiComponent } from './companant/moi/moi.component';
import { EducationComponent } from './companant/moi/education/education.component';
import { SwiperModule } from 'swiper/angular';
  
  @NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HeaderComponent,
    ContactComponent,
    SpecialiteComponent,
    MoiComponent,
    EducationComponent  ],
  imports: [
    SwiperModule,
    FontAwesomeModule,  
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
