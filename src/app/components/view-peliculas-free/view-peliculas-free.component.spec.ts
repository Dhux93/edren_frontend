import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeliculasFreeComponent } from './view-peliculas-free.component';

describe('ViewPeliculasFreeComponent', () => {
  let component: ViewPeliculasFreeComponent;
  let fixture: ComponentFixture<ViewPeliculasFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPeliculasFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPeliculasFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
