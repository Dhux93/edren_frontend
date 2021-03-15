import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeliculasPremiumComponent } from './view-peliculas-premium.component';

describe('ViewPeliculasPremiumComponent', () => {
  let component: ViewPeliculasPremiumComponent;
  let fixture: ComponentFixture<ViewPeliculasPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPeliculasPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPeliculasPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
