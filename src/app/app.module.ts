import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { WeatherIconComponent } from './components/weather-icon/weather-icon.component';

@NgModule({
  declarations: [AppComponent, CurrentComponent, WeatherIconComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
