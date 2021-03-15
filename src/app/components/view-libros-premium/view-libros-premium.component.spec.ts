import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLibrosPremiumComponent } from './view-libros-premium.component';

describe('ViewLibrosPremiumComponent', () => {
  let component: ViewLibrosPremiumComponent;
  let fixture: ComponentFixture<ViewLibrosPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLibrosPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibrosPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
