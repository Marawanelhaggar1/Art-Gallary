import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componant/navbar/navbar.component';
import { FooterComponent } from './componant/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMatModule } from './shared/ui/angular-mat/angular-mat.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMatModule,
  ],
  providers: [HttpClientModule, AngularMatModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
