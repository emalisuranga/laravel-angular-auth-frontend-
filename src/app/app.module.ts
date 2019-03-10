import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { SingupComponent } from './component/singup/singup.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ResponseResetComponent } from './component/password/response-reset/response-reset.component';
import { RequestResetComponent } from './component/password/request-reset/request-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SingupComponent,
    ProfileComponent,
    ResponseResetComponent,
    RequestResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
