import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
 // public showPassword: boolean = false;


  constructor(private formBuilder: FormBuilder,private userService: UserService) {

  }

   ngOnInit()  {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: "advance"

    });
  }
  signup() {
    if(this.registerForm.valid){
      let reqdata={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.Password,
        service:this.registerForm.value.service
      }
      console.log(this.registerForm.value);
      // this.userService.signup(reqData).subscribe((Response))
      // console.log(Response)
      this.userService.Signup(reqdata).subscribe(response =>{
        console.log(response);
      },error =>{
        console.log(error);
      })  
    } 
    else{
      console.log("form is not valid fill form correctly")
      return;
    }
  }
   
}
