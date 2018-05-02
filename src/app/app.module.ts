import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.route';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from './../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { AppHomeComponent } from './components/app-home/app-home.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';

import {UsersService} from './services/users.service';

import { HttpClientModule } from '@angular/common/http';
import { MyPostComponentComponent } from './components/my-post-component/my-post-component.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHomeComponent,
    FormModalComponent,
    MyPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    // HttpModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders, UsersService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormModalComponent
  ]
})
export class AppModule { }
