import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from "../../../../Component/sidenav/sidenav.component";
import { HeaderComponent } from "../../../../Component/header/header.component";
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../../../../Service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent, HeaderComponent,MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  public userCounts : any
  constructor(public _dashboardService:DashboardService){}
  ngOnInit(): void {
    this.userCounts = this._dashboardService.getUserCounts()
  }

}
