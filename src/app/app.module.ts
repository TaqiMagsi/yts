import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './module/header/header.component';
import { FooterComponent } from './module/footer/footer.component';
import { ApplayoutComponent } from './layout/applayout/applayout.component';
import { HomeComponent } from './shared/home/home.component';
import { UltraHDComponent } from './shared/ultra-hd/ultra-hd.component';
import { TrendingComponent } from './shared/trending/trending.component';
import { BrowsemoviesComponent } from './shared/browsemovies/browsemovies.component';
import { SitelayoutComponent } from './layout/sitelayout/sitelayout.component';
import { DetailsComponent } from './shared/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ApplayoutComponent,
    HomeComponent,
    UltraHDComponent,
    TrendingComponent,
    BrowsemoviesComponent,
    SitelayoutComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
