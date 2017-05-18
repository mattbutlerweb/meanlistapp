import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ListService } from './services/list.service';

import { AuthGuard } from './guards/auth.guard';
import { NewlistComponent } from './components/newlist/newlist.component';
import { NewlistitemComponent } from './components/newlistitem/newlistitem.component';
import { ListComponent } from './components/list/list.component'

const appRoutes: Routes = [

  {

    path: '',
    component: HomeComponent

  },
  {

    path: 'register',
    component: RegisterComponent

  },
  {

    path: 'login',
    component: LoginComponent

  },
  {

    path:'login/:message',
    component: LoginComponent

  },
  {

    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]

  },
  {

    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
  {

    path: 'list/:list',
    component: ListComponent,
    canActivate: [AuthGuard]

  },
  {

    path: 'newlistitem/:list',
    component: NewlistitemComponent,
    canActivate: [AuthGuard]

  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    NewlistComponent,
    NewlistitemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService, AuthGuard, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
