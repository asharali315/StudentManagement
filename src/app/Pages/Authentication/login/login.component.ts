import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { loginModel } from '../../../model/login.model';
import { dbService } from '../../../localDb/db.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastnotificationService } from '../../../Service/toastnotification.service';
import { AuthenticationService } from '../../../Service/authentication.service';
import { Route, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,RouterModule,MatFormFieldModule, MatInputModule, FormsModule, MatIconModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 
  public userLogInData : loginModel = {
  email: '',
  password: ''
 }
  emailPattern : any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  public isEmailValidated : boolean =false;
 // Function to check if a string matches the regex

 constructor(public _authService:AuthenticationService,
            public _notificationSerice:ToastnotificationService,
            private router: Router
 ){}

 loginSubmit(){
  if(this.userLogInData.email === '' || this.userLogInData.password === '')
  {
    this._notificationSerice.push('Email or password is missing','2')
    return;
  }
  if(!this.isEmailValidated)
    {
      this._notificationSerice.push('Use proper email','2')
      return;
    }
    
    var result = this._authService.loginUser(this.userLogInData)

    if(result === null || result === undefined)
    {
      this._notificationSerice.push('Wrong credentials','2')
      return
    }

    this._authService.authenticatedUser$.next(result);
    localStorage.setItem('userData',JSON.stringify(result))
    this._notificationSerice.push('User logged in','1')
    this.router.navigate(['user/dashboard']);

}

checkEmail(){
  this.isEmailValidated = this.isEmailValid(this.userLogInData.email)  
  
}



isEmailValid(email: string): boolean {
  return this.emailPattern.test(email);
}


}
