import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  public showPassword: boolean = false;


  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      cPassword:''
    });
  }
  onLoginSubmit() {
    if (this.loginForm.valid) {
      let reqData={
        email:this.loginForm.value.Email,
        password:this.loginForm.value.Password
      }
      console.log(this.loginForm.value);
      //call api in this place
      this.userService.login(reqData).subscribe((response:any) =>{
        console.log("login successfully",response);
        localStorage.setItem("token",response.id)
      },error =>{
        console.log(error);
      })  

   } 
    else{
      console.log("form is not valid fill form correctly");
      return;
    }
}
public checkboxPassword(): void {
  this.showPassword = !this.showPassword;
}
}
