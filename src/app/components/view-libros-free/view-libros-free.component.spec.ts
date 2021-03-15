import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLibrosFreeComponent } from './view-libros-free.component';

describe('ViewLibrosFreeComponent', () => {
  let component: ViewLibrosFreeComponent;
  let fixture: ComponentFixture<ViewLibrosFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLibrosFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibrosFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
