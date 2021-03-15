import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorNewFormComponent } from './autor-new-form.component';

describe('AutorNewFormComponent', () => {
  let component: AutorNewFormComponent;
  let fixture: ComponentFixture<AutorNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorNewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
