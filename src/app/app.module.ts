import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
