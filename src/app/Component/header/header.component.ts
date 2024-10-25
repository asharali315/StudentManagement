import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationService } from '../../Service/authentication.service';
import { Router } from '@angular/router';
import { ToastnotificationService } from '../../Service/toastnotification.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(public _authService:AuthenticationService,
     public _router : Router,
     private _notificationService : ToastnotificationService
  ){}


  logOutUser(){
    this._authService.authenticatedUser$.next(null);
    localStorage.clear();
    this._notificationService.push('User logged out','1')
    this._router.navigate(['login'])

  }
}
