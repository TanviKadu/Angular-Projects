// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { ProductComponent } from './product/product.component';
// import { AboutComponent } from './about/about.component';
// import { LoginComponent } from './login/login.component';
// import { BillingComponent } from './billing/billing.component';
// import { ReactiveFormsModule } from '@angular/forms';  // ✅ Import this

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     ProductComponent,
//     AboutComponent,
//     LoginComponent,
//     BillingComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BillingComponent } from './billing/billing.component';
import { ReactiveFormsModule } from '@angular/forms';  // ✅ Import this for forms support

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutComponent,
    LoginComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule  // ✅ Required for forms (login, billing, etc.)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
