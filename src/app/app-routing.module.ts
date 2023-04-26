import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* component route imports */
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/user/user-list", pathMatch: "full" },
  
  /* user routes */
  { path: "user/user-change/:id", component: UserChangeComponent },
  { path: "user/user-create", component: UserCreateComponent },
  { path: "user/user-detail/:id", component: UserDetailComponent },
  { path: "user/user-list", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
