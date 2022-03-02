import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder , private userService:UserService) { }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      // Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    this.submitted=true;
    if (this.forgetForm.valid) {
      let reqdata={
        email:this.forgetForm.value.Email
      }
      console.log(this.forgetForm.value);
      //calling api in this place
      this.userService.forgotPassword(reqdata).subscribe(response => {
        console.log(response);
      },error =>{
        console.log(error);

      });
      
    
    }
    else{
      console.log("form is not valid ,fill form correctly");
      return;
    }
}
}
