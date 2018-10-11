import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';
import {SupplierInfoModule} from './supplier-info/supplier-info.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    LoginModule,
    HomeModule,
    SupplierInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

   // Diagnostic only: inspect router configuration
   constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
