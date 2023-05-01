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

/* product component imports */
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';

/* request component imports */
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestListComponent } from './request/request-list/request-list.component';

/* requestline component imports */
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';

/* review component imports */
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewRequestComponent } from './review/review-request/review-request.component';

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
  { path: "vendor/vendor-list", component: VendorListComponent},

  /* product routes */
  { path: "product/product-change/:id", component: ProductChangeComponent },
  { path: "product/product-create", component: ProductCreateComponent },
  { path: "product/product-detail/:id", component: ProductDetailComponent },
  { path: "product/product-list", component: ProductListComponent },

  /* request routes */
  { path: "request/request-change/:id", component: RequestChangeComponent },
  { path: "request/request-create", component: RequestCreateComponent },
  { path: "request/request-detail/:id", component: RequestDetailComponent },
  { path: "request/request-lines/:id", component: RequestLinesComponent },
  { path: "request/request-list", component: RequestListComponent },

  /* requestline routes */
  { path: "requestline/requestline-change/:id", component: RequestlineChangeComponent },
  { path: "requestline/requestline-create/:id", component: RequestlineCreateComponent },

  /* review routes */
  { path: "review/review-list", component: ReviewListComponent },
  { path: "review/review-request/:id", component: ReviewRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
