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
