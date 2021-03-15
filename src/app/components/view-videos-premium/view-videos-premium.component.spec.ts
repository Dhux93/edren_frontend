import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideosPremiumComponent } from './view-videos-premium.component';

describe('ViewVideosPremiumComponent', () => {
  let component: ViewVideosPremiumComponent;
  let fixture: ComponentFixture<ViewVideosPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVideosPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVideosPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
