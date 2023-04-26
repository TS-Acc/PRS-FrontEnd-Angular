import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* core component imports */
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';

/* user component imports */
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

/* vendor component imports */
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/user/user-list", pathMatch: "full" },
  
  /* core routes */
  { path: "core/about", component: AboutComponent },
  { path: "core/e404", component: E404Component },
  { path: "core/home", component: HomeComponent },
  { path: "core/login", component: LoginComponent },

  /* user routes */
  { path: "user/user-change/:id", component: UserChangeComponent },
  { path: "user/user-create", component: UserCreateComponent },
  { path: "user/user-detail/:id", component: UserDetailComponent },
  { path: "user/user-list", component: UserListComponent },

  /* vendor routes */
  { path: "vendor/vendor-change/:id", component: VendorChangeComponent },
  { path: "vendor/vendor-create", component: VendorCreateComponent},
  { path: "vendor/vendor-detail/:id", component: VendorDetailComponent},
  { path: "vendor/vendor-list", component: VendorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
