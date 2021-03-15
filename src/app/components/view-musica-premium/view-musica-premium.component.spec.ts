import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusicaPremiumComponent } from './view-musica-premium.component';

describe('ViewMusicaPremiumComponent', () => {
  let component: ViewMusicaPremiumComponent;
  let fixture: ComponentFixture<ViewMusicaPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMusicaPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMusicaPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
