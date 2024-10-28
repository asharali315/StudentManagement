import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditusersComponent } from './addoreditusers.component';

describe('AddoreditusersComponent', () => {
  let component: AddoreditusersComponent;
  let fixture: ComponentFixture<AddoreditusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddoreditusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddoreditusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
