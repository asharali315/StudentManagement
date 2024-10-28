import { Component } from '@angular/core';
import { user } from '../../../../model/user.model';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { course } from '../../../../model/course.model';

@Component({
  selector: 'app-addoreditusers',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,ReactiveFormsModule,MatButtonModule],
  templateUrl: './addoreditusers.component.html',
  styleUrl: './addoreditusers.component.css'
})
export class AddoreditusersComponent {
  userForm: FormGroup;
  user: user[] = [];
  displayedColumns: string[] = ['id', 'name', 'sessionName', 'actions'];
  isEditMode = false;
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      sessionName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Sample data
  }

  
  onSubmit(): void {
    if (this.userForm.valid) {
      if (this.isEditMode && this.editingUserId !== null) {
        // Update existing course
        // const index = this.courses.findIndex(c => c.id === this.editingCourseId);
        // this.courses[index] = this.courseForm.value;
        // this.isEditMode = false;
        // this.editingCourseId = null;
      } else {
        // Add new course
        // const newCourse = { ...this.courseForm.value, id: Date.now() };
        // this.courses.push(newCourse);
      }
      // this.courseForm.reset();
    }
  }

  onEdit(course: user): void {
    this.isEditMode = true;
    // this.editingCourseId = course.id;
    // this.courseForm.patchValue(course);
  }

  onDelete(courseId: number): void {
    // this.courses = this.courses.filter(c => c.id !== courseId);
  }

  onCancelEdit(): void {
    this.isEditMode = false;
    // this.editingCourseId = null;
    // this.courseForm.reset();
  }



}
