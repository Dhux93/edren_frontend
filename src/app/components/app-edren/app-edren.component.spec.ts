import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEdrenComponent } from './app-edren.component';

describe('AppEdrenComponent', () => {
  let component: AppEdrenComponent;
  let fixture: ComponentFixture<AppEdrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEdrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEdrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
