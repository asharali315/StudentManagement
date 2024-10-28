import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditcourseComponent } from './addeditcourse.component';

describe('AddeditcourseComponent', () => {
  let component: AddeditcourseComponent;
  let fixture: ComponentFixture<AddeditcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddeditcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddeditcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
