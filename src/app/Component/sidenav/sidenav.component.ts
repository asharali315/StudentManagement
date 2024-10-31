import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthenticationService } from '../../Service/authentication.service';
import { authenticatedUser } from '../../model/authenticateduser.Model';
import { dbService } from '../../localDb/db.service';
import { routes } from '../../model/userroutes.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule,MatListModule,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  showFiller = true;
  public userRoutes!:routes[]
  constructor(public _authService:AuthenticationService,
   public _dbService:dbService
  ){}
  
  ngOnInit(): void {
    this._authService.authenticatedUser$.subscribe((res:authenticatedUser|null)=>{
      console.log(res)
      if(res === null)
        {
          var user = localStorage.getItem('userData')
          
          if(user){
            let userData = JSON.parse(user)
            console.table(userData)
            this.userRoutes = this._dbService.getUserRoutes(1)
            this._authService.authenticatedUser$.next(userData);
          }
          return;
        }
      
      this.userRoutes = this._dbService.getUserRoutes(1)

    })
  }

}
