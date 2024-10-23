import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { dbService } from '../../../localDb/db.service';
import { ToastnotificationService } from '../../../Service/toastnotification.service';
import { authenticatedUser } from '../../../model/authenticateduser.Model';
import { AuthenticationService } from '../../../Service/authentication.service';

@Component({
  selector: 'app-forgotpassword',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterModule,MatFormFieldModule, MatInputModule, FormsModule, MatIconModule,CommonModule,ReactiveFormsModule],
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent implements OnInit {

  
  forgotPasswordFormGroup : FormGroup  = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmPassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
 
  }); 
 

  constructor(public _authService:AuthenticationService,
    public _notificationService:ToastnotificationService,
    public router:Router
  ){}
 
  ngOnInit(): void {
    this.initConfirmPasswordFormGroup();
  }


  initConfirmPasswordFormGroup(){
    this.forgotPasswordFormGroup =  new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
   
    });
   
  }


  passwordsDoNotMatch(): boolean {
      const password =  this.forgotPasswordFormGroup.get('password')?.value;
      const confirmPassword = this.forgotPasswordFormGroup.get('confirmPassword')?.value;
      return password && confirmPassword && password !== confirmPassword;

  }

  // Handle form submission
  submit() {
    if (this.forgotPasswordFormGroup !== null && this.forgotPasswordFormGroup.valid && !this.passwordsDoNotMatch()) {
      let user = this._authService.getUser(this.forgotPasswordFormGroup.controls['email'].value)
      if(user === null || user === undefined)
      {
        this._notificationService.push("user does not exist",'2');
        return;
      }

      user.password = this.forgotPasswordFormGroup.controls['password'].value;
      
      var result = this._authService.changeUserPassword(user)
      
      if(result)
      {
        this._notificationService.push("password changed successfully",'1')
        this.router.navigate(['login'])
      }
      else
      {
        this._notificationService.push("password did not changed",'2')
      }
  
    }
  
    else
    {
      this._notificationService.push("password did not changed",'2')
    }
      // Handle form submission logic here
      
  }
}
