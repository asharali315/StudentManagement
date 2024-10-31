import { Component } from '@angular/core';
import { course } from '../../../../model/course.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { apis } from '../../../../api';
import { ToastnotificationService } from '../../../../Service/toastnotification.service';

@Component({
  selector: 'app-addeditcourse',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './addeditcourse.component.html',
  styleUrl: './addeditcourse.component.css'
})
export class AddeditcourseComponent {

  courseForm: FormGroup;
  courses: course[] = [];
  displayedColumns: string[] = ['id', 'name', 'sessionName', 'actions'];
  isEditMode = false;
  editingCourseId: number | null = null;

  constructor(private fb: FormBuilder, public _http : HttpClient,public _notificationService : ToastnotificationService) {
    this.courseForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      sessionName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Sample data
  }

  
  onSubmit(): void {
    this._http.post(apis.createCourse,this.courseForm.value)
    .subscribe((res:any)=>{
      this._notificationService.push(res.message,'1')
    },(e:any)=>{
      this._notificationService.push(e.error.message,'2')
    })

    // if (this.courseForm.valid) {
    //   if (this.isEditMode && this.editingCourseId !== null) {
    //     // Update existing course
    //     const index = this.courses.findIndex(c => c.id === this.editingCourseId);
    //     this.courses[index] = this.courseForm.value;
    //     this.isEditMode = false;
    //     this.editingCourseId = null;
    //   } else {
    //     // Add new course
    //     const newCourse = { ...this.courseForm.value, id: Date.now() };
    //     this.courses.push(newCourse);
    //   }
    //   this.courseForm.reset();
    // }
  }

  onEdit(course: course): void {
    this.isEditMode = true;
    this.editingCourseId = course.id;
    this.courseForm.patchValue(course);
  }

  onDelete(courseId: number): void {
    this.courses = this.courses.filter(c => c.id !== courseId);
  }

  onCancelEdit(): void {
    this.isEditMode = false;
    this.editingCourseId = null;
    this.courseForm.reset();
  }

}
