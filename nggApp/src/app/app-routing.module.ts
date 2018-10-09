import { LogsComponent } from './logs/logs.component';
import { OwnerComponent } from './rights/owner/owner.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { SuperadmComponent } from './rights/superadm/superadm.component';
import { AdmComponent } from './rights/adm/adm.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'owner',
    component: OwnerComponent
  },
  {
    path: 'superadm',
    component: SuperadmComponent
  },
  {
    path: 'adm',
    component: AdmComponent
  },
  {
    path: 'logs',
    component: LogsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
