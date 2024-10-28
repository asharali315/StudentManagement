import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

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
  

onEdit(data: any): void {
 
}

onDelete(data: any): void {
  // this.courses = this.courses.filter(c => c.id !== courseId);
  // this.updateTable();
}

ngOnChanges(changes: SimpleChanges): void {
}




}
