import { ErrorComponent } from './Components/error/error.component';
import { UsersComponent } from './Components/users/users.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HomeComponent } from './Components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"profile", component:ProfileComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
