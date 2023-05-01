import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AboutComponent } from './core/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { MenuBarComponent } from './menu/menu-bar/menu-bar.component';
import { LoginComponent } from './core/login/login.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewRequestComponent } from './review/review-request/review-request.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    UserChangeComponent,
    UserDetailComponent,
    UserCreateComponent,
    MenuBarComponent,
    LoginComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorChangeComponent,
    ProductListComponent,
    ProductChangeComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestChangeComponent,
    RequestCreateComponent,
    RequestLinesComponent,
    RequestlineCreateComponent,
    RequestlineChangeComponent,
    ReviewListComponent,
    ReviewRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
