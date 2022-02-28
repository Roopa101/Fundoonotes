import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';



// sets up routes constant where you define your routes
const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'forget' , component:ForgetComponent},
  {path:'reset' , component:ResetComponent }
  


];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
