import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { LoginPipe } from './login.pipe';
import { SignupPipe } from './signup.pipe';

@NgModule({
  declarations: [AppComponent, LoginPipe, SignupPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StatusBar,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}