import { Component, OnInit } from '@angular/core';
import { AddeditcourseComponent } from "../../Component/addeditcourse/addeditcourse.component";
import { TableComponent } from "../../../../Component/table/table.component";
import { dbService } from '../../../../localDb/db.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [AddeditcourseComponent, TableComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
 allCourse: any[] = []
  constructor(public _dbService:dbService){}


  ngOnInit(): void {
   this.allCourse =  this._dbService.getAllData('courses')
}

public displayedColumns:string[] = ["id","name",'sessionName','action'];




}
