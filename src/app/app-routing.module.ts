import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TakeNotesComponent } from './components/take-notes/take-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { AuthenticationGuard } from './authentication.guard';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
// sets up routes constant where you define your routes
const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },

  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'forget' , component:ForgetComponent},
  {path:'resetpassword/:token' , component:ResetComponent },
  { path: 'dashboard' , component:DashboardComponent,canActivate:[AuthenticationGuard],children:[
    { path: '', redirectTo: "notes", pathMatch: "full" },
    { path: 'notes',component:GetAllNotesComponent}]},
  

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
