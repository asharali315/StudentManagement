import { Component } from '@angular/core';
import { SidenavComponent } from '../../../Component/sidenav/sidenav.component';
import { HeaderComponent } from '../../../Component/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [SidenavComponent,HeaderComponent,RouterOutlet],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

}
