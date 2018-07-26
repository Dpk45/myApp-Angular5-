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
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {UsersService} from './services/users.service';

import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppHomeComponent,
    FormModalComponent,
    FileSelectDirective,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
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
