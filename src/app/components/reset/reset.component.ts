import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;
  token:any;
  public showPassword: boolean = false;


  constructor(private formBuilder: FormBuilder , private userService:UserService,private activeRoute:ActivatedRoute) { }

  ngOnInit():void {
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    this.resetForm = this.formBuilder.group({
     // Email: ['', [Validators.required, Validators.email]],
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword:['',[Validators.required,Validators.minLength(6)]]

    });
  }
  onSubmit() {
   // this.submitted=true;

    if (this.resetForm.valid) {
      let reqdata={
        newPassword:this.resetForm.value.NewPassword
      }
      console.log(this.resetForm.value);
      //calling api in this place
      this.userService.resetPassword(reqdata,this.token).subscribe((response:any) =>{
      console.log("reset password ")
      },error =>{
        console.log(error);
      })  
      
    }
    else{
      console.log("form is not valid fill form correctly")
      return;
    }
  
  }
public checkboxPassword(): void {
  this.showPassword = !this.showPassword;
}

}