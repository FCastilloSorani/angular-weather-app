import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { CurrentComponent } from './components/current/current.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CurrentComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
