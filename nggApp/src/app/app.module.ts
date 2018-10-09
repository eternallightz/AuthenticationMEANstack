import { LogsComponent } from './logs/logs.component';
import { LogsService } from './logs.service';
import { NameService } from './name.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from '../app/auth.service';
import { EventService } from './event.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { OwnerComponent } from './rights/owner/owner.component';
import { SuperadmComponent } from './rights/superadm/superadm.component';
import { AdmComponent } from './rights/adm/adm.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    OwnerComponent,
    SuperadmComponent,
    AdmComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecaptchaModule.forRoot()
  ],
  providers: [AuthService, EventService, AuthGuard, NameService, LogsService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
