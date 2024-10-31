import { DataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { apis } from '../../api';
import { ToastnotificationService } from '../../Service/toastnotification.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatIconModule,MatTableModule,MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() dataSource:any[] = []
  @Input() displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  @Input() url!:string  

 
  constructor(public _http: HttpClient,public _notificationService:ToastnotificationService){

  }
 
  onEdit(data: any): void {
 
}

onDelete(data: any): void {
  // this.courses = this.courses.filter(c => c.id !== courseId);
  // this.updateTable();
}

ngOnChanges(changes: SimpleChanges): void {
  if(changes['url']){
  this.dataSource = []
    this._http.get(this.url)
  .subscribe((res:any)=>{
    this._notificationService.push(res.message,'1')
    
    this.dataSource = res.data
  },(e:any)=>{
    this._notificationService.push(e.error.message,'2')
  })  
  }

}




}
